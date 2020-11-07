/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user';
import { IAd } from './ad';
import { IMessage } from './message';

export interface INegotiation extends Document {
  createdBy: IUser['_id'];
  ad: IAd['_id'];
  forUserAd: IUser['_id'] | IUser;
  messages?: Array<IMessage['_id'] | IMessage>;
  isConcluded: boolean;
  dateCreated: Date;
}

const negotiationSchema = new Schema({
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
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
});

negotiationSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export const Negotiation = mongoose.model<INegotiation>(
  'Negotiation',
  negotiationSchema
);
