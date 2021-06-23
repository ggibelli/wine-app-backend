/* eslint-disable @typescript-eslint/no-unsafe-return */
import mongoose, { Schema, HookNextFunction } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import bcrypt from 'bcrypt';

import {
  UserDocument,
  UserModel,
  UserSchema,
} from '../interfaces/mongoose.gen';

const HASH_ROUNDS = 10;

export interface Coordinates {
  latitude: number;
  longitude: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const userSchema: UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    minlength: 3,
    required: true,
  },
  phoneNumber: {
    type: String,
    unique: true,
    minlength: 10,
    required: true,
  },
  firstName: { type: String, required: true, minlength: 2 },
  lastName: { type: String, required: true, minlength: 2 },
  password: { type: String, required: true },
  pIva: {
    type: String,
    unique: true,
    minlength: 11,
    required: true,
  },
  address: {
    via: {
      type: String,
      minlength: 5,
    },
    comune: { type: String, required: true, minlength: 5 },
  },
  coordinates: {
    latitude: Number,
    longitude: Number,
  },
  isVerified: {
    type: Boolean,
    required: true,
    default: false,
  },
  isPremium: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  hideContact: {
    type: Boolean,
    default: true,
  },
  ads: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Ad',
    },
  ],
  savedAds: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Ad',
    },
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Message',
    },
  ],
  negotiations: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Negotiation',
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
  adsRemaining: Number,
  dateCreated: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now,
  },
});

userSchema.pre('save', async function (next: HookNextFunction) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(HASH_ROUNDS);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (e) {
    return next(e);
  }
});

userSchema.methods.validatePassword = async function (
  pass: string,
): Promise<boolean> {
  return bcrypt.compare(pass, this.password);
};
// @ts-ignore
userSchema.plugin(mongooseUniqueValidator);

export const User: UserModel = mongoose.model<UserDocument, UserModel>(
  'User',
  userSchema,
);
