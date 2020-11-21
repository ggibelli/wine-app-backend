import jwt from 'jsonwebtoken';
import { SECRET } from './config';
import { User } from '../models/user';

interface DecodedUser {
  _id: string;
}

export const createToken = ({ _id }: { _id: string }): string =>
  jwt.sign({ _id }, SECRET);

export const getUserFromToken = async (token: any) => {
  try {
    const user = jwt.verify(token, SECRET) as DecodedUser;
    return User.findById(user._id).lean().exec();
  } catch (e) {
    return null;
  }
};
