import jwt from 'jsonwebtoken';
import { SECRET } from './config';
import { User } from '../models/user';

interface DecodedUser {
  _id: string;
}

export const createToken = ({ _id }: { _id: string }) =>
  jwt.sign({ _id }, SECRET);

export const getUserFromToken = (token: any) => {
  try {
    const user = jwt.verify(token, SECRET) as DecodedUser;
    return User.findById(user._id);
  } catch (e) {
    return null;
  }
};
