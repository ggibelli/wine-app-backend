/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { MongoDataSource } from 'apollo-datasource-mongodb';
import { IUserDoc, UserGraphQl } from '../models/user';
import isemail from 'isemail';
import isValidPassword from '../utils/passwordValidator';
import isPivaValid from '../utils/pivaValidator';
import { UserInput, UserInputUpdate } from '../generated/graphql';
import { Errors } from '../types';
import { PORT } from '../utils/config';
import { sendMail } from '../utils/mailServer';
import { CronJob } from 'cron';
import { loggerError } from '../utils/logger';

interface Context {
  user: UserGraphQl;
  createToken(user: IUserDoc): string;
  createTokenMail(user: IUserDoc): string;
}

export interface AuthResponse {
  response: {
    user: IUserDoc | UserGraphQl;
    token: string;
  } | null;

  errors: Errors[];
}

export interface UserResponse {
  response: UserGraphQl | null;
  errors: Errors[];
}

export default class Users extends MongoDataSource<IUserDoc, Context> {
  async getUser(userId: string): Promise<IUserDoc | null | undefined> {
    return this.findOneById(userId);
  }

  getUsers(): Promise<UserGraphQl[]> {
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
    const newUser = new this.model({ ...user });
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
    const passValid = await user?.validatePassword(password);
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
