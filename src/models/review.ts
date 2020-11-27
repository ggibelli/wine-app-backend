/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import mongoose, { Schema, Document } from 'mongoose';
import { IUserDoc } from './user';
import { INegotiationDoc } from './negotiation';
import { TypeAd } from '../types';

enum Rating {
  POOR = 1,
  AVERAGE = 2,
  OK = 3,
  GOOD = 4,
  PERFECT = 5,
}

export interface IReview {
  createdBy: IUserDoc['_id'] | IUserDoc;
  negotiation: INegotiationDoc['_id'] | INegotiationDoc;
  forUserAd: IUserDoc['_id'] | IUserDoc;
  rating: Rating;
  dateCreated: Date;
  content: string;
  type: TypeAd;
}

export interface IReviewDoc extends IReview, Document {}

const reviewSchemaFields: Record<keyof IReview, any> = {
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
    enum: ['SELL', 'BUY'],
  },
};

const reviewSchema = new Schema(reviewSchemaFields);

reviewSchema.index({ createdBy: 1, negotiation: 1 }, { unique: true });

export const Review = mongoose.model<IReviewDoc>('Review', reviewSchema);
