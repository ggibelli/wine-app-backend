import mongoose, { Schema } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

import {
  NegotiationDocument,
  NegotiationModel,
  NegotiationSchema,
} from '../interfaces/mongoose.gen';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const negotiationSchema: NegotiationSchema = new Schema({
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    enum: ['SELL', 'BUY'],
    required: true,
  },
  ad: {
    type: Schema.Types.ObjectId,
    ref: 'Ad',
    required: true,
  },
  forUserAd: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Message',
    },
  ],
  isConcluded: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now,
  },
  dateConcluded: {
    type: Date,
  },
});

negotiationSchema.index({ createdBy: 1, ad: 1 }, { unique: true });
// @ts-ignore
negotiationSchema.plugin(mongooseUniqueValidator);
export const Negotiation: NegotiationModel = mongoose.model<
NegotiationDocument,
NegotiationModel
>('Negotiation', negotiationSchema);
