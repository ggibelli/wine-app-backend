/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import mongoose, { Schema, Document } from 'mongoose';
import { IUserDoc } from './user';
import { INegotiationDoc } from './negotiation';

export interface IMessage {
  negotiation: INegotiationDoc['_id'] | INegotiationDoc;
  content: string;
  sentBy: IUserDoc['_id'] | IUserDoc;
  sentTo: IUserDoc['_id'] | IUserDoc;
  dateSent: Date;
}

export interface IMessageDoc extends IMessage, Document {}

const messageSchemaFields: Record<keyof IMessage, any> = {
  negotiation: {
    type: Schema.Types.ObjectId,
    ref: 'Negotiation',
    required: true,
  },
  content: {
    type: String,
    minlength: 1,
    required: true,
  },
  sentBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  sentTo: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  dateSent: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now,
  },
};

const messageSchema = new Schema(messageSchemaFields);

export const Message = mongoose.model<IMessageDoc>('Message', messageSchema);
