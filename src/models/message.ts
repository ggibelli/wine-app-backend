/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user';
import { IAd } from './ad';
import { INegotiation } from './negotiation';

export interface IMessage extends Document {
  negotiation: INegotiation['_id'] | INegotiation;
  content: string;
  sentBy: IUser['_id'] | IUser;
  sentTo: IUser['_id'] | IUser;
  dateSent: Date;
}

const messageSchema = new Schema({
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
});

messageSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export const Message = mongoose.model<IAd>('Message', messageSchema);
