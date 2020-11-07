/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user';
import { INegotiation } from './negotiation';
import { TypeAd } from '../types';

enum Rating {
  POOR = 1,
  AVERAGE = 2,
  OK = 3,
  GOOD = 4,
  PERFECT = 5,
}

export interface IReview extends Document {
  createdBy: IUser['_id'] | IUser;
  negotiation: INegotiation['_id'] | INegotiation;
  forUserAd: IUser['_id'] | IUser;
  rating: Rating;
  dateCreated: Date;
  content: string;
  type: TypeAd;
}

const reviewSchema = new Schema({
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  negotiation: {
    type: Schema.Types.ObjectId,
    ref: 'Negotiation',
    required: true,
  },
  forUserAd: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  dateCreated: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now,
  },
  content: {
    type: String,
    minlength: 5,
  },
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    required: true,
  },
  type: {
    type: String,
    enum: ['Sell', 'Buy'],
  },
});

reviewSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export const Review = mongoose.model<IReview>('Review', reviewSchema);
