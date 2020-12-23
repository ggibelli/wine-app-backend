import jwt from 'jsonwebtoken';
import { SECRET } from './config';
import { User, UserGraphQl } from '../models/user';

export interface DecodedUser {
  _id: string;
}

export const createToken = ({ _id }: { _id: string }): string =>
  jwt.sign({ _id }, SECRET);

export const createTokenMail = ({ _id }: { _id: string }): string =>
  jwt.sign({ _id }, SECRET, { expiresIn: '1d' });

export const getUserFromToken = async (
  token: string | undefined
): Promise<UserGraphQl | null> => {
  if (!token) {
    return null;
  }
  try {
    const user = jwt.verify(token, SECRET) as DecodedUser;
    return User.findById(user._id).lean().exec();
  } catch (e) {
    return null;
  }
};
