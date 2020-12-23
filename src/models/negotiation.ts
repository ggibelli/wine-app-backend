import mongoose, { Schema, Document } from 'mongoose';
import { IUserDoc } from './user';
import { IAdDoc } from './ad';
import { IMessageDoc } from './message';
import { TypeAd } from '../types';
import mongooseUniqueValidator from 'mongoose-unique-validator';

export interface INegotiation {
  createdBy: IUserDoc['_id'];
  ad: IAdDoc['_id'];
  forUserAd: IUserDoc['_id'];
  messages?: mongoose.Types.Array<IMessageDoc['_id']>;
  isConcluded: boolean;
  dateCreated: Date;
  type: TypeAd;
}

export interface NegotiationGraphQl extends INegotiation {
  _id: mongoose.Types.ObjectId;
}

export interface INegotiationDoc extends INegotiation, Document {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const negotiationSchemaFields: Record<keyof INegotiation, any> = {
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
};

const negotiationSchema = new Schema(negotiationSchemaFields);

negotiationSchema.index({ createdBy: 1, ad: 1 }, { unique: true });
negotiationSchema.plugin(mongooseUniqueValidator);
export const Negotiation = mongoose.model<INegotiationDoc>(
  'Negotiation',
  negotiationSchema
);
