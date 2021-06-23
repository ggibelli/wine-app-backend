import mongoose, { Schema } from 'mongoose';

import { MessageDocument, MessageModel, MessageSchema } from '../interfaces/mongoose.gen';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const messageSchema: MessageSchema = new Schema({
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
});

messageSchema.index({ negotiation: 1 });

export const Message: MessageModel = mongoose.model<
MessageDocument,
MessageModel
>('Message', messageSchema);
