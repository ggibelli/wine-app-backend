/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { MongoDataSource } from 'apollo-datasource-mongodb';
import { Errors } from '../types';
import { IMessageDoc, MessageGraphQl } from '../models/message';
import { UserGraphQl } from '../models/user';
import {
  MessageInput,
  QueryMessagesForNegotiationArgs,
} from '../generated/graphql';
import { loggerError } from '../utils/logger';
import { ADMINISTRATOR_ID, NEGOTIATION_ADM } from '../utils/config';
interface Context {
  user: UserGraphQl;
  createToken(user: UserGraphQl): string;
}

interface Response {
  response: IMessageDoc | MessageGraphQl | null;
  errors: Errors[];
}

export default class Messages extends MongoDataSource<IMessageDoc, Context> {
  async getMessage(id: string): Promise<IMessageDoc | null | undefined> {
    const message = await this.findOneById(id);
    if (message) message.isViewed = true;
    try {
      await message?.save();
    } catch (e) {
      loggerError(e);
    }
    return message;
  }
  async getMessages(): Promise<MessageGraphQl[]> {
    const userCtx = this.context.user;
    if (userCtx.isAdmin) {
      return this.model.find({}).lean().exec();
    }
    await this.collection.createIndex({ sentTo: 1 });
    await this.collection.createIndex({ sentBy: 1 });
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
        sentTo: sentTo,
      })
      .lean()
      .exec();
  }

  async getMessagesNegotiationType(negotiation: string) {
    await this.collection.createIndex({ sentTo: 1 });
    await this.collection.createIndex({ sentBy: 1 });
    const userCtx = this.context.user;
    const messages = await this.model
      .find({
        $or: [{ sentBy: userCtx._id }, { sentTo: userCtx._id }],
        negotiation: negotiation,
      })
      .exec();
    return messages;
  }

  async getMessagesForNegotiation({
    negotiation,
    limit = 20,
    offset = 0,
  }: QueryMessagesForNegotiationArgs) {
    await this.collection.createIndex({ sentTo: 1 });
    await this.collection.createIndex({ sentBy: 1 });
    const userCtx = this.context.user;
    const messages = await this.model
      .find({
        $or: [{ sentBy: userCtx._id }, { sentTo: userCtx._id }],
        negotiation: negotiation,
      })
      .sort({ _id: -1 })
      .skip(offset)
      .limit(limit)
      .exec();
    const pageCount = await this.model
      .find({
        $or: [{ sentBy: userCtx._id }, { sentTo: userCtx._id }],
        negotiation: negotiation,
      })
      .countDocuments()
      .exec();

    const messagesToRead = messages.filter(
      (message) =>
        message.sentTo.toString() === this.context.user._id.toString() &&
        !message.isViewed
    );
    if (messagesToRead) {
      for (const message of messagesToRead) {
        message.isViewed = true;
        try {
          await message.save();
        } catch (e) {
          loggerError(e);
        }
      }
    }

    return { messages, pageCount };
  }

  async createMessage(message: MessageInput): Promise<Response> {
    const errors: Errors[] = [];
    const createdMessage: IMessageDoc = new this.model({
      ...message,
      sentBy: this.context.user,
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
    message: string
  ): Promise<void> {
    if (!recipients) return;
    await Promise.all(
      recipients.map(async (recipient) => {
        const createdMessage: IMessageDoc = new this.model({
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
      })
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
