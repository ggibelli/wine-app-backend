import { MongoDataSource } from 'apollo-datasource-mongodb';
import { IUser, IUserDoc } from '../models/user';
import isemail from 'isemail';
import isValidPassword from '../utils/passwordValidator';
import isPivaValid from '../utils/pivaValidator';
import { UserInput } from '../generated/graphql';
import { UserInputError } from 'apollo-server-express';

interface Context {
  user: IUser;
  createToken(user: IUser): string;
}

export default class Users extends MongoDataSource<IUserDoc, Context> {
  async getUser(userId: string) {
    return this.model.findById(userId).lean().exec();
    //return this.findOneById(userId);
  }

  getUsers() {
    return this.model.find({}).lean().exec();
  }

  async createUser(user: UserInput) {
    if (!isemail.validate(user.email)) {
      throw new UserInputError('The email provided is not valid');
    }
    if (isValidPassword.validate(user.password)) {
      throw new UserInputError('The password is not strong enough');
    }
    if (!isPivaValid(user.pIva)) {
      throw new UserInputError('The partita iva is not valid');
    }
    const newUser = new this.model({ ...user });
    try {
      await newUser.save();
    } catch (e) {
      throw new UserInputError(e.message);
    }
    const token = this.context.createToken(newUser);
    return {
      user: newUser,
      token,
    };
  }

  async login(email: string, password: string) {
    const user = await this.model.findOne({ email });
    if (!user) {
      throw new UserInputError('User not found');
    }
    if (!user?.validatePassword(password)) {
      throw new UserInputError('Wrong credentials');
    }
    return {
      user,
      token: this.context.createToken(user),
    };
  }
}
