/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { MongoDataSource } from 'apollo-datasource-mongodb';
import { Errors } from '../types';
import { IMessageDoc, MessageGraphQl } from '../models/message';
import { UserGraphQl } from '../models/user';
import { MessageInput } from '../generated/graphql';

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
    return this.findOneById(id);
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

  async getMessagesForNegotiation(negotiation: string) {
    await this.collection.createIndex({ sentTo: 1 });
    await this.collection.createIndex({ sentBy: 1 });
    const userCtx = this.context.user;
    return this.model
      .find({
        $or: [{ sentBy: userCtx._id }, { sentTo: userCtx._id }],
        negotiation: negotiation,
      })
      .lean()
      .exec();
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
