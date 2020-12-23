/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  Resolvers,
  MessageInput,
  //MessageInputUpdate,
} from '../generated/graphql';
import Users from '../data-sources/users';
import Messages from '../data-sources/messages';
import Negotiations from '../data-sources/negotiations';
import { MessageGraphQl } from '../models/message';
import { UserGraphQl } from '../models/user';
import { PubSub, withFilter } from 'apollo-server-express';

const pubsub = new PubSub();

const MESSAGE_SENT = 'MESSAGE_SENT';

interface StringIndexSignatureInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
}

type StringIndexed<T> = T & StringIndexSignatureInterface;

interface MongoDataSource {
  users: Users;
  messages: Messages;
  negotiations: Negotiations;
}

export const resolver: StringIndexed<Resolvers> = {
  Query: {
    async messagesToUser(
      _,
      { sentTo },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.messages.getMessagesTo(sentTo);
    },
    async messagesForNegotiation(
      _,
      { negotiation },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.messages.getMessagesForNegotiation(negotiation);
    },
    async messages(_, __, { dataSources }: { dataSources: MongoDataSource }) {
      return dataSources.messages.getMessages();
    },
    async message(
      _,
      { id },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.messages.getMessage(id);
    },
  },
  Mutation: {
    async createMessage(
      _,
      { message }: { message: MessageInput },
      { dataSources, user }: { dataSources: MongoDataSource; user: UserGraphQl }
    ) {
      const negotiation = await dataSources.negotiations.getNegotiation(
        message.negotiation
      );
      if (
        negotiation?.createdBy.toString() !== user._id.toString() &&
        negotiation?.forUserAd.toString() !== user._id.toString()
      ) {
        return {
          response: null,
          errors: [
            {
              name: 'UserInputError',
              text: 'You can only send messages if you own the negotiation',
            },
          ],
        };
      }
      const messageResponse = await dataSources.messages.createMessage(message);
      if (!messageResponse.errors.length) {
        await pubsub.publish(MESSAGE_SENT, {
          messageSent: messageResponse.response,
        });
      }
      return messageResponse;
    },

    // updateMessage(
    //   _,
    //   { message }: { message: MessageInputUpdate },
    //   { dataSources }: { dataSources: MongoDataSource }
    // ) {
    //   return dataSources.messages.updateMessage(message);
    // },
    // deleteMessage(
    //   _: void,
    //   { id }: { id: string },
    //   { dataSources }: { dataSources: MongoDataSource }
    // ) {
    //   return dataSources.messages.deleteMessage(id);
    // },
  },

  Subscription: {
    messageSent: {
      subscribe: withFilter(
        () => pubsub.asyncIterator([MESSAGE_SENT]),
        (
          payload: { messageSent: MessageGraphQl },
          _,
          { user }: { user: UserGraphQl }
        ) => {
          return Boolean(
            payload.messageSent.sentTo.toString() === user._id.toString()
          );
        }
      ),
    },
  },

  Message: {
    async sentBy(
      message: MessageGraphQl,
      _,
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.users.getUser(message.sentBy);
    },
    async sentTo(
      message: MessageGraphQl,
      _,
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.users.getUser(message.sentTo);
    },
    async negotiation(
      message: MessageGraphQl,
      _,
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.negotiations.getNegotiation(message.negotiation);
    },
  },
};
