import { Resolvers, WineInput, WineInputUpdate } from '../generated/graphql';
import Users from '../data-sources/users';
import Wines from '../data-sources/wines';

interface StringIndexSignatureInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
}

type StringIndexed<T> = T & StringIndexSignatureInterface;

interface MongoDataSource {
  users: Users;
  wines: Wines;
}

const resolver: StringIndexed<Resolvers> = {
  Query: {
    async wines(_, __, { dataSources }: { dataSources: MongoDataSource }) {
      return dataSources.wines.getWines();
    },
    async wine(_, { id }, { dataSources }: { dataSources: MongoDataSource }) {
      return dataSources.wines.getWine(id);
    },
  },
  Mutation: {
    async createWine(
      _,
      { wine }: { wine: WineInput },
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      return dataSources.wines.createWine(wine);
    },

    async updateWine(
      _,
      { wine }: { wine: WineInputUpdate },
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      return dataSources.wines.updateWine(wine);
    },
    async deleteWine(
      _,
      { id }: { id: string },
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      return dataSources.wines.deleteWine(id);
    },
  },
};

export default resolver;
