import { MongoDataSource } from 'apollo-datasource-mongodb';
import { LeanDocument, Types } from 'mongoose';
import { Errors } from '../types';
import { MessageDocument, UserDocument } from '../interfaces/mongoose.gen';
import {
  MessageInput,
  QueryMessagesForNegotiationArgs,
} from '../generated/graphql';
import { loggerError } from '../utils/logger';
import { ADMINISTRATOR_ID, NEGOTIATION_ADM } from '../utils/config';

interface Context {
  user: LeanDocument<UserDocument>;
  createToken(user: LeanDocument<UserDocument>): string;
}

interface Response {
  response: MessageDocument | LeanDocument<MessageDocument> | null;
  errors: Errors[];
}

export default class Messages extends MongoDataSource<
MessageDocument,
Context
> {
  async getMessage(id: string): Promise<MessageDocument | null | undefined> {
    const message = await this.findOneById(id);
    if (message) message.isViewed = true;
    try {
      await message?.save();
    } catch (e) {
      loggerError(e);
    }
    return message;
  }

  async getMessages(): Promise<LeanDocument<MessageDocument>[]> {
    const userCtx = this.context.user;
    if (userCtx.isAdmin) {
      return this.model.find({}).lean().exec();
    }
    return this.model
      .find({
        $or: [{ sentBy: userCtx._id }, { sentTo: userCtx._id }],
      })
      .lean()
      .exec();
  }

  async getMessagesTo(sentTo: string) {
    const userCtx = this.context.user;
    return this.model
      .find({
        sentBy: userCtx._id,
        sentTo,
      })
      .lean()
      .exec();
  }

  async getMessagesNegotiationType(negotiation: string) {
    const userCtx = this.context.user;
    const messages = await this.model
      .find({
        $or: [{ sentBy: userCtx._id }, { sentTo: userCtx._id }],
        negotiation,
      })
      .exec();
    return messages;
  }

  async getMessagesForNegotiation({
    negotiation,
    limit = 20,
    offset = 0,
  }: QueryMessagesForNegotiationArgs) {
    const userCtx = this.context.user;
    const messages = await this.model
      .find({
        $or: [{ sentBy: userCtx._id }, { sentTo: userCtx._id }],
        negotiation,
      })
      .sort({ _id: -1 })
      .skip(offset)
      .limit(limit)
      .exec();
    const pageCount = await this.model
      .find({
        $or: [{ sentBy: userCtx._id }, { sentTo: userCtx._id }],
        negotiation,
      })
      .countDocuments()
      .exec();

    const messagesToRead = messages.filter(
      (message) => message.sentTo.toString() === this.context.user._id.toString()
        && !message.isViewed,
    );
    if (messagesToRead) {
      await Promise.all(
        messagesToRead.map(async (message) => {
          message.isViewed = true;
          await message.save();
        }),
      );
      // for (const message of messagesToRead) {
      //   message.isViewed = true;
      //   try {
      //     await message.save();
      //   } catch (e) {
      //     loggerError(e);
      //   }
      // }
    }

    return { messages, pageCount };
  }

  async createMessage(message: MessageInput): Promise<Response> {
    const errors: Errors[] = [];
    const createdMessage: MessageDocument = new this.model({
      ...message,
      sentBy: this.context.user,
      _id: new Types.ObjectId(),
    });
    if (createdMessage.sentBy.toString() === createdMessage.sentTo.toString()) {
      errors.push({
        name: 'UserInputError',
        text: 'You cannot send messages to yourself',
      });
      return {
        response: null,
        errors,
      };
    }
    try {
      await createdMessage.save();
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      errors.push({ name: 'General Error', text: e.message });
      return {
        response: null,
        errors,
      };
    }
    return {
      response: createdMessage,
      errors,
    };
  }

  async messageAdmin(
    recipients: string[] | undefined,
    message: string,
  ): Promise<void> {
    if (!recipients) return;
    await Promise.all(
      recipients.map(async (recipient) => {
        const createdMessage: MessageDocument = new this.model({
          _id: new Types.ObjectId(),
          sentTo: recipient,
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          content: message,
          sentBy: ADMINISTRATOR_ID,
          negotiation: NEGOTIATION_ADM,
        });
        try {
          await createdMessage.save();
        } catch (e) {
          loggerError(e);
        }
        // const message: IMessageDoc = new this.model({sentTo })
      }),
    );
  }

  // async updateMessage(message: MessageInputUpdate): Promise<Response> {
  //   const errors: Errors[] = [];
  //   const updatedMessage = await this.model.findByIdAndUpdate(message._id, message, {
  //     new: true,
  //   });
  //   if (!updatedMessage) {
  //     errors.push({
  //       name: 'General error',
  //       text: 'Errors during the message update',
  //     });
  //     return {
  //       response: null,
  //       errors,
  //     };
  //   }
  //   return {
  //     response: updatedMessage,
  //     errors,
  //   };
  // }

  async deleteMessages(negotiation: string): Promise<Errors | null> {
    let error: Errors | null = null;
    try {
      await this.model.deleteMany({ negotiation });
    } catch (e) {
      error = {
        name: 'messages deletion error',
        text: e as string,
      };
    }
    return error;
  }

  async deleteMessage(messageId: string): Promise<Response> {
    const errors: Errors[] = [];
    const deletedMessage = await this.model
      .findByIdAndDelete(messageId)
      .lean()
      .exec();
    if (!deletedMessage) {
      errors.push({
        name: 'General error',
        text: 'Errors during the message delete',
      });
      return {
        response: null,
        errors,
      };
    }
    return {
      response: deletedMessage,
      errors,
    };
  }
}
