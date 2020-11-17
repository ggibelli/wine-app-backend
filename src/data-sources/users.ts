import { MongoDataSource } from 'apollo-datasource-mongodb';
import { IUser, IUserDoc, User } from '../models/user';
import bcrypt from 'bcrypt';
import isemail from 'isemail';
import isValidPassword from '../utils/passwordValidator';
import isPivaValid from '../utils/pivaValidator';
import { UserInput } from '../generated/graphql';
import { UserInputError } from 'apollo-server-express';

export default class Users extends MongoDataSource<IUserDoc | IUser> {
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
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(user.password, saltRounds);
    const newUser = new User({ ...user, passwordHash });
    try {
      await newUser.save();
    } catch (e) {
      throw new UserInputError(e.message);
    }
    return newUser;
  }
}
