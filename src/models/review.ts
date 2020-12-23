import mongoose, { Schema, Document } from 'mongoose';
import { IUserDoc } from './user';
import { INegotiationDoc } from './negotiation';
import { TypeAd, Rating } from '../types';
import mongooseUniqueValidator from 'mongoose-unique-validator';

export interface IReview {
  createdBy: IUserDoc['_id'];
  negotiation: INegotiationDoc['_id'];
  forUser: IUserDoc['_id'];
  rating: Rating;
  dateCreated: Date;
  content: string;
  type: TypeAd;
}

export interface ReviewGraphQl extends IReview {
  _id: mongoose.Types.ObjectId;
}

export interface IReviewDoc extends IReview, Document {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  forUser: {
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
    type: String,
    enum: ['POOR', 'AVERAGE', 'OK', 'GOOD', 'PERFECT'],
    required: true,
  },
  type: {
    type: String,
    enum: ['SELL', 'BUY'],
  },
};

const reviewSchema = new Schema(reviewSchemaFields);

reviewSchema.index({ createdBy: 1, negotiation: 1 }, { unique: true });
reviewSchema.plugin(mongooseUniqueValidator);

export const Review = mongoose.model<IReviewDoc>('Review', reviewSchema);
