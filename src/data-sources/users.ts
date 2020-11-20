import { MongoDataSource } from 'apollo-datasource-mongodb';
import { IUser, IUserDoc, User } from '../models/user';
import isemail from 'isemail';
import isValidPassword from '../utils/passwordValidator';
import isPivaValid from '../utils/pivaValidator';
import { UserInput } from '../generated/graphql';
import { UserInputError } from 'apollo-server-express';

export default class Users extends MongoDataSource<IUserDoc> {
  getUser(userId: string) {
    return this.findOneById(userId);
  }
  getUsers() {
    return User.find({}).lean().exec();
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
    const newUser = new User({ ...user });
    try {
      await newUser.save();
    } catch (e) {
      throw new UserInputError(e.message);
    }
    const token = this.context.createToken(newUser._id);
    return {
      user: newUser,
      token,
    };
  }
}
