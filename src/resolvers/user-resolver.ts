import { Resolvers, UserInput } from '../generated/graphql';
import { UserGraphQl } from '../models/user';
import Users from '../data-sources/users';
import Ads from '../data-sources/ads';

interface StringIndexSignatureInterface {
  [index: string]: any;
}

type StringIndexed<T> = T & StringIndexSignatureInterface;

interface MongoDataSource {
  users: Users;
  ads: Ads;
  // wines: Wines;
}

export const resolver: StringIndexed<Resolvers> = {
  Query: {
    users(_, __, { dataSources }: { dataSources: MongoDataSource }) {
      return dataSources.users.getUsers();
    },
    user(_, { id }, { dataSources }: { dataSources: MongoDataSource }) {
      return dataSources.users.getUser(id);
    },
    me(_, __, { user }: { user: UserGraphQl }) {
      return user;
    },
  },
  Mutation: {
    createUser(
      _: any,
      { user }: { user: UserInput },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.users.createUser(user);
    },
    login(
      _: any,
      { email, password }: { email: string; password: string },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.users.login(email, password);
    },
  },
  User: {
    ads(user, _, { dataSources }: { dataSources: MongoDataSource }) {
      return dataSources.ads.getAdsByUser(user._id);
    },
  },
};
