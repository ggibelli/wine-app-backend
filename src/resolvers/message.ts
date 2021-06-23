/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PubSub, withFilter } from 'apollo-server-express';
import { LeanDocument } from 'mongoose';
import {
  Resolvers,
  MessageInput,
  // MessageInputUpdate,
} from '../generated/graphql';
import Users from '../data-sources/users';
import Messages from '../data-sources/messages';
import Negotiations from '../data-sources/negotiations';
import {
  UserDocument,
  MessageDocument,
  IsPopulated,
} from '../interfaces/mongoose.gen';

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

const resolver: StringIndexed<Resolvers> = {
  Query: {
    async messagesToUser(
      _,
      { sentTo }: { sentTo: string },
      { dataSources }: { dataSources: MongoDataSource },
    ): Promise<LeanDocument<MessageDocument>[]> {
      return dataSources.messages.getMessagesTo(sentTo);
    },
    async messagesForNegotiation(
      _,
      args,
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      return dataSources.messages.getMessagesForNegotiation(args);
    },
    async messages(_, __, { dataSources }: { dataSources: MongoDataSource }) {
      return dataSources.messages.getMessages();
    },
    async message(
      _,
      { id },
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      return dataSources.messages.getMessage(id);
    },
  },
  Mutation: {
    async createMessage(
      _,
      { message }: { message: MessageInput },
      {
        dataSources,
        user,
      }: { dataSources: MongoDataSource; user: LeanDocument<UserDocument> },
    ) {
      const negotiation = await dataSources.negotiations.getNegotiation(
        message.negotiation,
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
          payload: { messageSent: LeanDocument<MessageDocument> },
          _,
          { user }: { user: LeanDocument<UserDocument> },
        ) =>
          Boolean(
            payload.messageSent.sentTo.toString() === user._id.toString(),
          ),
      ),
    },
  },

  Message: {
    async sentBy(
      message,
      _,
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      if (IsPopulated(message.sentBy)) {
        return dataSources.users.getUser(message.sentBy._id.toHexString());
      }
      return dataSources.users.getUser(message.sentBy.toHexString());
    },
    async sentTo(
      message,
      _,
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      if (IsPopulated(message.sentTo)) {
        return dataSources.users.getUser(message.sentTo._id.toHexString());
      }
      return dataSources.users.getUser(message.sentTo.toHexString());
    },
    async negotiation(
      message,
      _,
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      if (IsPopulated(message.negotiation)) {
        
        return dataSources.negotiations.getNegotiation(
          message.negotiation._id.toHexString(),
        );
      }
     
      
      return dataSources.negotiations.getNegotiation(
        message.negotiation.toHexString(),
      );
    },
  },
};

export default resolver;
