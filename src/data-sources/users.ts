import { MongoDataSource } from 'apollo-datasource-mongodb';
import isemail from 'isemail';
import { CronJob } from 'cron';
import { LeanDocument, Types } from 'mongoose';
import { AdDocument, UserDocument } from '../interfaces/mongoose.gen';
import isValidPassword from '../utils/passwordValidator';
import isPivaValid from '../utils/pivaValidator';
import { UserInput, UserInputUpdate } from '../generated/graphql';
import { Errors } from '../types';
import { PORT } from '../utils/config';
import { sendMail } from '../utils/mailServer';
import { loggerError } from '../utils/logger';
import getCoordinatesFromAddress from '../utils/coordinatesExtractor';

interface Context {
  user: LeanDocument<UserDocument>;
  createToken(user: UserDocument): string;
  createTokenMail(user: UserDocument): string;
}

export interface AuthResponse {
  response: {
    user: UserDocument | LeanDocument<UserDocument>;
    token: string;
  } | null;

  errors: Errors[];
}

export interface UserResponse {
  response: LeanDocument<UserDocument> | null;
  errors: Errors[];
}

export default class Users extends MongoDataSource<UserDocument, Context> {
  async getUser(userId: string): Promise<UserDocument | null | undefined> {
    return this.findOneById(userId);
  }

  getUsers(): Promise<LeanDocument<UserDocument>[]> {
    return this.model.find({}).lean().exec();
  }

  async createUser(user: UserInput): Promise<AuthResponse> {
    const errors: Errors[] = [];
    if (!isemail.validate(user.email)) {
      errors.push({
        name: 'UserInputError',
        text: 'The email provided is not valid',
      });
    }
    if (!isValidPassword.validate(user.password)) {
      errors.push({
        name: 'UserInputError',
        text: 'The password provided is not valid',
      });
    }
    if (!isPivaValid(user.pIva)) {
      errors.push({
        name: 'UserInputError',
        text: 'The PIVA provided is not valid',
      });
    }
    const coordinates = await getCoordinatesFromAddress(user.address);

    const newUser = new this.model({
      _id: new Types.ObjectId(),

      ...user,
      coordinates,
    });
    if (errors.length > 0) {
      return {
        response: null,
        errors,
      };
    }
    try {
      await newUser.save();
    } catch (e) {
      errors.push({
        name: 'General Error',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        text: e.message,
      });
      return {
        response: null,
        errors,
      };
    }
    const tokenForMail = this.context.createTokenMail(newUser);
    const token = this.context.createToken(newUser);
    const url = `http://localhost:${PORT}/verify?id=${tokenForMail}`;
    const mailBody = {
      subject: 'Signup successful',
      body: {
        intro: `Welcome to WineApp! We're very excited to have you on board. \n
          click on the <a href="${url}">link</a> to activate your account`,
      },
    };
    let countDeliveryTries = 0;
    const jobMail = new CronJob('*/1 * * * *', () => {
      if (countDeliveryTries >= 2) {
        jobMail.stop();
        return;
      }
      sendMail(mailBody, [newUser.email])
        .then(() => {
          jobMail.stop();
        })
        .catch((e) => {
          loggerError(e);
          countDeliveryTries += 1;
        });
    });
    jobMail.start();
    return {
      response: {
        user: newUser,
        token,
      },
      errors,
    };
  }

  async updateUser(user: UserInputUpdate): Promise<UserResponse> {
    const errors: Errors[] = [];
    if (user.email && !isemail.validate(user.email)) {
      errors.push({
        name: 'UserInputError',
        text: 'The email provided is not valid',
      });
    }
    if (user.password && !isValidPassword.validate(user.password)) {
      errors.push({
        name: 'UserInputError',
        text: 'The password provided is not valid',
      });
    }
    if (user.pIva && !isPivaValid(user.pIva)) {
      errors.push({
        name: 'UserInputError',
        text: 'The PIVA provided is not valid',
      });
    }
    const updatedUser = await this.model
      .findByIdAndUpdate(user._id, user, { new: true })
      .lean()
      .exec();
    if (!updatedUser) {
      errors.push({
        name: 'General error',
        text: 'Error during the update',
      });
      return {
        response: null,
        errors,
      };
    }
    return {
      response: updatedUser,
      errors,
    };
  }

  async deleteUser(id: string): Promise<UserResponse> {
    const errors: Errors[] = [];
    const deletedUser = await this.model.findByIdAndDelete(id).lean().exec();
    if (!deletedUser) {
      errors.push({
        name: 'General error',
        text: 'Error during the delete',
      });
      return {
        response: null,
        errors,
      };
    }
    return {
      response: deletedUser,
      errors,
    };
  }

  async saveAd(ad: AdDocument) {
    const errors: Errors[] = [];
    const user = await this.model.findById(this.context.user._id);
    const isSaved = user?.savedAds?.findIndex(
      (adSaved) => adSaved.toString() === ad._id.toString(),
    ) !== -1;
    if (isSaved) {
      ad.savedBy?.pull({ _id: user?._id });

      user?.savedAds?.pull({ _id: ad._id });
    } else {
      ad.savedBy?.addToSet(user);

      user?.savedAds?.addToSet(ad);
    }

    try {
      await user?.save();
      await ad.save();
    } catch (e) {
      errors.push({
        name: 'General error',
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        text: `text error: ${e}`,
      });
    }
    return {
      response: ad,
      errors,
    };
  }

  async login(email: string, password: string): Promise<AuthResponse> {
    const errors: Errors[] = [];
    const user = await this.model.findOne({ email });
    if (!user) {
      errors.push({ name: 'UserInputError', text: 'User not found' });
      return {
        response: null,
        errors,
      };
    }
    const passValid = await user.validatePassword(password);
    if (!passValid) {
      errors.push({ name: 'UserInputError', text: 'Wrong credentials' });
      return {
        response: null,
        errors,
      };
    }
    return {
      response: { user, token: this.context.createToken(user) },
      errors,
    };
  }
}
