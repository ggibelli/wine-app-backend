import { ForbiddenError } from 'apollo-server-express';
import { LeanDocument } from 'mongoose';
import { Resolvers, UserInput, UserInputUpdate } from '../generated/graphql';
import Users, { AuthResponse, UserResponse } from '../data-sources/users';
import Ads from '../data-sources/ads';
import Messages from '../data-sources/messages';
import Negotiations from '../data-sources/negotiations';
import Reviews from '../data-sources/reviews';

import { UserDocument, AdDocument } from '../interfaces/mongoose.gen';

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

const resolver: StringIndexed<Resolvers> = {
  Query: {
    async users(
      _,
      __,
      { dataSources }: { dataSources: MongoDataSource },
    ): Promise<LeanDocument<UserDocument>[]> {
      return dataSources.users.getUsers();
    },
    async user(
      _,
      { id }: { id: string },
      { dataSources }: { dataSources: MongoDataSource },
    ): Promise<LeanDocument<UserDocument> | undefined | null> {
      return dataSources.users.getUser(id);
    },
    me(
      _,
      __,
      { user }: { user: LeanDocument<UserDocument> },
    ): LeanDocument<UserDocument> {
      return user;
    },
  },
  Mutation: {
    async createUser(
      _,
      { user }: { user: UserInput },
      { dataSources }: { dataSources: MongoDataSource },
    ): Promise<AuthResponse> {
      return dataSources.users.createUser(user);
    },
    async updateUser(
      _,
      { user }: { user: UserInputUpdate },
      { dataSources }: { dataSources: MongoDataSource },
    ): Promise<UserResponse> {
      return dataSources.users.updateUser(user);
    },
    async deleteUser(
      _,
      { id }: { id: string },
      { dataSources }: { dataSources: MongoDataSource },
    ): Promise<UserResponse> {
      return dataSources.users.deleteUser(id);
    },
    async login(
      _,
      { email, password }: { email: string; password: string },
      { dataSources }: { dataSources: MongoDataSource },
    ): Promise<AuthResponse> {
      return dataSources.users.login(email, password);
    },
  },
  User: {
    async ads(user, _, { dataSources }: { dataSources: MongoDataSource }) {
      return dataSources.ads.getAdsUserType(user._id.toString());
    },
    async messages(
      root,
      _,
      {
        dataSources,
        user,
      }: { dataSources: MongoDataSource; user: LeanDocument<UserDocument> },
    ) {
      if (root._id.toString() === user._id.toString()) {
        return dataSources.messages.getMessages();
      }
      throw new ForbiddenError('You can only see your own messages');
    },
    async negotiations(
      root,
      _,
      {
        dataSources,
        user,
      }: { dataSources: MongoDataSource; user: LeanDocument<UserDocument> },
    ) {
      if (root._id.toString() === user._id.toString()) {
        return dataSources.negotiations.getNegotiationsForUserType();
      }
      throw new ForbiddenError('You can only see your own negotiations');
    },
    
    async savedAds(
      root,
      _,
      {
        dataSources,
        user,
      }: { dataSources: MongoDataSource; user: LeanDocument<UserDocument> },
    ) {
      if (root._id.toString() === user._id.toHexString()) {
        if (user.savedAds?.length) {
          const ids = user.savedAds.map((ids) => ids.toString());
          const savedAds = await dataSources.ads.findManyByIds(ids) as LeanDocument<AdDocument>[];
          if (!savedAds.length) return [];
          
          return (savedAds.sort((a, b) => {
            if (!b.datePosted || !a.datePosted) return 1
            return b.datePosted - a.datePosted}));
        }
        return [];
      }
      throw new ForbiddenError('You can only see your own saved ads');
    },
    async reviews(
      root,
      _,
      {
        dataSources,
        user,
      }: { dataSources: MongoDataSource; user: LeanDocument<UserDocument> },
    ) {
      if (root._id.toString() === user._id.toString()) {
        return dataSources.reviews.getReviewForUser();
      }
      throw new ForbiddenError('You can only see your own negotiations');
    },
    email(root, _, { user }: { user: LeanDocument<UserDocument> }) {
      if (root._id.toString() === user._id.toString()) {
        return root.email;
      }
      if (!root.hideContact) {
        return root.email;
      }
      return 'The user prefers to hide the email';
    },
    phoneNumber(root, _, { user }: { user: LeanDocument<UserDocument> }) {
      if (root._id.toString() === user._id.toString()) {
        return root.phoneNumber;
      }
      if (!root.hideContact) {
        return root.phoneNumber;
      }
      return 'The user prefers to hide the phone number';
    },
  },
};

export default resolver;
