import mongoose, { Schema, Document } from 'mongoose';
import { IUserDoc } from './user';
import { INegotiationDoc } from './negotiation';

export interface IMessage {
  negotiation: INegotiationDoc['_id'];
  content: string;
  sentBy: IUserDoc['_id'];
  sentTo: IUserDoc['_id'];
  dateSent: Date;
  isViewed: boolean;
}

export interface MessageGraphQl extends IMessage {
  _id: mongoose.Types.ObjectId;
}

export interface IMessageDoc extends IMessage, Document {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  isViewed: {
    type: Boolean,
    default: false,
  },
};

const messageSchema = new Schema(messageSchemaFields);

messageSchema.index({ negotiation: 1, sentTo: 1, sentFrom: 1 });

export const Message = mongoose.model<IMessageDoc>('Message', messageSchema);
