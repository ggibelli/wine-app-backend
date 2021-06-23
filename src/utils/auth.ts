import jwt from 'jsonwebtoken';
import { LeanDocument } from 'mongoose';
import { SECRET } from './config';
import { User } from '../models/user';
import { UserDocument } from '../interfaces/mongoose.gen';

export interface DecodedUser {
  _id: string;
}

export const createToken = ({ _id }: { _id: string }): string => jwt.sign({ _id }, SECRET);

export const createTokenMail = ({ _id }: { _id: string }): string => jwt.sign({ _id }, SECRET, { expiresIn: '1d' });

export const getUserFromToken = async (
  token: string | undefined,
): Promise<LeanDocument<UserDocument> | null> => {
  if (!token) {
    return null;
  }
  try {
    const user = jwt.verify(token, SECRET) as DecodedUser;
    return await User.findById(user._id).lean().exec();
  } catch (e) {
    return null;
  }
};
