import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/user';
import { DecodedUser } from '../utils/auth';
import { SECRET } from '../utils/config';

export const confirmationRouter = Router();

confirmationRouter.get('/verify', async (req, res) => {
  const token = req.query.id;
  if (token && typeof token === 'string') {
    try {
      const user = jwt.verify(token, SECRET) as DecodedUser;
      await User.findByIdAndUpdate(user._id, { isVerified: true })
        .lean()
        .exec();
      return res.sendStatus(200);
    } catch (e) {
      return res.sendStatus(403);
    }
  } else {
    return res.sendStatus(403);
  }
});
