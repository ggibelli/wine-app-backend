import { MongoDataSource } from 'apollo-datasource-mongodb';
import { IUser, IUserDoc } from '../models/user';
import isemail from 'isemail';
import isValidPassword from '../utils/passwordValidator';
import isPivaValid from '../utils/pivaValidator';
import { UserInput } from '../generated/graphql';
import { Error } from '../types';

interface Context {
  user: IUser;
  createToken(user: IUser): string;
}

export default class Users extends MongoDataSource<IUserDoc, Context> {
  async getUser(userId: string) {
    //return this.model.findById(ad.postedBy).lean().exec();
    return this.findOneById(userId);
  }

  getUsers() {
    return this.model.find({}).lean().exec();
  }

  async createUser(user: UserInput) {
    const errors: Error[] = [];
    if (!isemail.validate(user.email)) {
      errors.push({
        name: 'UserInputError',
        text: 'The email provided is not valid',
      });
      //throw new UserInputError('The email provided is not valid');
    }
    if (!isValidPassword.validate(user.password)) {
      errors.push({
        name: 'UserInputError',
        text: 'The password provided is not valid',
      });
      //throw new UserInputError('The password is not strong enough');
    }
    if (!isPivaValid(user.pIva)) {
      errors.push({
        name: 'UserInputError',
        text: 'The PIVA provided is not valid',
      });
      //throw new UserInputError('The partita iva is not valid');
    }
    const newUser = new this.model({ ...user });
    try {
      await newUser.save();
    } catch (e) {
      errors.push({
        name: 'General Error',
        text: e.message,
      });
      return {
        user: null,
        errors,
      };
      //throw new Error(e.message);
    }
    const token = this.context.createToken(newUser);
    return {
      response: {
        user: newUser,
        token,
      },
      errors,
    };
  }

  async login(email: string, password: string) {
    const errors: Error[] = [];
    const user = await this.model.findOne({ email });
    if (!user) {
      //throw new UserInputError('User not found');
      errors.push({ name: 'UserInputError', text: 'User not found' });
      return {
        response: null,
        errors,
      };
    }
    if (!user?.validatePassword(password)) {
      errors.push({ name: 'UserInputError', text: 'Wrong credentials' });
      //throw new UserInputError('Wrong credentials');
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
