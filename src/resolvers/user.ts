import { Resolvers, UserInput, UserInputUpdate } from '../generated/graphql';
import { UserGraphQl } from '../models/user';
import Users from '../data-sources/users';
import Ads from '../data-sources/ads';
import Messages from '../data-sources/messages';
import Negotiations from '../data-sources/negotiations';
import { ForbiddenError } from 'apollo-server-express';
import Reviews from '../data-sources/reviews';

interface StringIndexSignatureInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
}

type StringIndexed<T> = T & StringIndexSignatureInterface;

interface MongoDataSource {
  users: Users;
  ads: Ads;
  messages: Messages;
  negotiations: Negotiations;
  reviews: Reviews;
  // wines: Wines;
}

export const resolver: StringIndexed<Resolvers> = {
  Query: {
    async users(_, __, { dataSources }: { dataSources: MongoDataSource }) {
      return dataSources.users.getUsers();
    },
    async user(_, { id }, { dataSources }: { dataSources: MongoDataSource }) {
      return dataSources.users.getUser(id);
    },
    me(_, __, { user }: { user: UserGraphQl }) {
      return user;
    },
  },
  Mutation: {
    async createUser(
      _,
      { user }: { user: UserInput },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.users.createUser(user);
    },
    async updateUser(
      _,
      { user }: { user: UserInputUpdate },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.users.updateUser(user);
    },
    async deleteUser(
      _,
      { id }: { id: string },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.users.deleteUser(id);
    },
    async login(
      _,
      { email, password }: { email: string; password: string },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.users.login(email, password);
    },
  },
  User: {
    async ads(user, _, { dataSources }: { dataSources: MongoDataSource }) {
      return dataSources.ads.getAdsByUser(user._id);
    },
    async messages(
      root,
      _,
      { dataSources, user }: { dataSources: MongoDataSource; user: UserGraphQl }
    ) {
      if (root._id.toString() === user._id.toString()) {
        return dataSources.messages.getMessages();
      }
      throw new ForbiddenError('You can only see your own messages');
    },
    async negotiations(
      root,
      _,
      { dataSources, user }: { dataSources: MongoDataSource; user: UserGraphQl }
    ) {
      if (root._id.toString() === user._id.toString()) {
        return dataSources.negotiations.getNegotiations();
      }
      throw new ForbiddenError('You can only see your own negotiations');
    },
    async reviews(
      root,
      _,
      { dataSources, user }: { dataSources: MongoDataSource; user: UserGraphQl }
    ) {
      if (root._id.toString() === user._id.toString()) {
        return dataSources.reviews.getReviews();
      }
      throw new ForbiddenError('You can only see your own negotiations');
    },
    email(root, _, { user }: { user: UserGraphQl }) {
      if (root._id.toString() === user._id.toString()) {
        return root.email;
      }
      if (!root.hideContact) {
        return root.email;
      }
      return 'The user prefers to hide the email';
    },
    phoneNumber(root, _, { user }: { user: UserGraphQl }) {
      if (root._id.toString() === user._id.toString()) {
        return root.phoneNumber;
      }
      if (!root.hideContact) {
        return root.phoneNumber;
      }
      return 'The user prefers to hide the phone number';
    },
    // aggiungo logica per mostrare solo negotiation e certi dati solo se sono i miei
  },
};
