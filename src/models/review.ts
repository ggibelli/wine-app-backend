import mongoose, { Schema } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

import {
  ReviewModel,
  ReviewSchema,
  ReviewDocument,
} from '../interfaces/mongoose.gen';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reviewSchema: ReviewSchema = new Schema({
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
    maxlength: 130,
  },
  rating: {
    type: Number,
    enum: [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
    required: true,
  },
  type: {
    type: String,
    enum: ['SELL', 'BUY'],
  },
});

reviewSchema.index({ createdBy: 1, negotiation: 1 }, { unique: true });
// @ts-ignore
reviewSchema.plugin(mongooseUniqueValidator);

export const Review: ReviewModel = mongoose.model<ReviewDocument, ReviewModel>(
  'Review',
  reviewSchema,
);
