import {
  AdsResult,
  NegotiationResult,
  Resolvers,
  ReviewResult,
  UserAdsArgs,
  UserInput,
  UserInputUpdate,
  UserNegotiationsArgs,
  UserReviewsArgs,
} from '../generated/graphql';
import { UserGraphQl } from '../models/user';
import Users, { AuthResponse, UserResponse } from '../data-sources/users';
import Ads from '../data-sources/ads';
import Messages from '../data-sources/messages';
import Negotiations from '../data-sources/negotiations';
import { ForbiddenError } from 'apollo-server-express';
import Reviews from '../data-sources/reviews';
import { IAdDoc } from '../models/ad';
import { MessageGraphQl } from '../models/message';

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
    async users(
      _,
      __,
      { dataSources }: { dataSources: MongoDataSource }
    ): Promise<UserGraphQl[]> {
      return dataSources.users.getUsers();
    },
    async user(
      _,
      { id }: { id: string },
      { dataSources }: { dataSources: MongoDataSource }
    ): Promise<UserGraphQl | undefined | null> {
      return dataSources.users.getUser(id);
    },
    me(_, __, { user }: { user: UserGraphQl }): UserGraphQl {
      console.log('yo');
      return user;
    },
  },
  Mutation: {
    async createUser(
      _,
      { user }: { user: UserInput },
      { dataSources }: { dataSources: MongoDataSource }
    ): Promise<AuthResponse> {
      return dataSources.users.createUser(user);
    },
    async updateUser(
      _,
      { user }: { user: UserInputUpdate },
      { dataSources }: { dataSources: MongoDataSource }
    ): Promise<UserResponse> {
      return dataSources.users.updateUser(user);
    },
    async deleteUser(
      _,
      { id }: { id: string },
      { dataSources }: { dataSources: MongoDataSource }
    ): Promise<UserResponse> {
      return dataSources.users.deleteUser(id);
    },
    async login(
      _,
      { email, password }: { email: string; password: string },
      { dataSources }: { dataSources: MongoDataSource }
    ): Promise<AuthResponse> {
      return dataSources.users.login(email, password);
    },
  },
  User: {
    async ads(
      user: UserGraphQl,
      args: UserAdsArgs,
      { dataSources }: { dataSources: MongoDataSource }
    ): Promise<AdsResult> {
      return dataSources.ads.getAdsByUser(user._id, args);
    },
    async messages(
      root: UserGraphQl,
      _,
      { dataSources, user }: { dataSources: MongoDataSource; user: UserGraphQl }
    ): Promise<MessageGraphQl[]> {
      if (root._id.toString() === user._id.toString()) {
        return dataSources.messages.getMessages();
      }
      throw new ForbiddenError('You can only see your own messages');
    },
    async negotiations(
      root: UserGraphQl,
      args: UserNegotiationsArgs,
      { dataSources, user }: { dataSources: MongoDataSource; user: UserGraphQl }
    ): Promise<NegotiationResult> {
      if (root._id.toString() === user._id.toString()) {
        return dataSources.negotiations.getNegotiations(args);
      }
      throw new ForbiddenError('You can only see your own negotiations');
    },
    async savedAds(
      root: UserGraphQl,
      _,
      { dataSources, user }: { dataSources: MongoDataSource; user: UserGraphQl }
    ): Promise<IAdDoc[]> {
      if (root._id.toString() === user._id.toString()) {
        if (user.savedAds?.length) {
          return dataSources.ads.findManyByIds(user.savedAds) as Promise<
            IAdDoc[]
          >;
        }
        return [];
      }
      throw new ForbiddenError('You can only see your own saved ads');
    },
    async reviews(
      root: UserGraphQl,
      args: UserReviewsArgs,
      { dataSources, user }: { dataSources: MongoDataSource; user: UserGraphQl }
    ): Promise<ReviewResult> {
      if (root._id.toString() === user._id.toString()) {
        return dataSources.reviews.getReviews(args);
      }
      throw new ForbiddenError('You can only see your own negotiations');
    },
    email(root: UserGraphQl, _, { user }: { user: UserGraphQl }): string {
      if (root._id.toString() === user._id.toString()) {
        return root.email;
      }
      if (!root.hideContact) {
        return root.email;
      }
      return 'The user prefers to hide the email';
    },
    phoneNumber(root: UserGraphQl, _, { user }: { user: UserGraphQl }): string {
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
