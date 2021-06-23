import {
  Resolvers,
  VineyardInput,
  VineyardInputUpdate,
} from '../generated/graphql';
import Users from '../data-sources/users';
import Vineyards from '../data-sources/vineyards';

interface StringIndexSignatureInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
}

type StringIndexed<T> = T & StringIndexSignatureInterface;

interface MongoDataSource {
  users: Users;
  vineyards: Vineyards;
}

const resolver: StringIndexed<Resolvers> = {
  Query: {
    async vineyards(_, __, { dataSources }: { dataSources: MongoDataSource }) {
      return dataSources.vineyards.getVineyards();
    },
    async vineyard(
      _,
      { id },
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      return dataSources.vineyards.getVineyard(id);
    },
  },
  Mutation: {
    async createVineyard(
      _,
      { vineyard }: { vineyard: VineyardInput },
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      return dataSources.vineyards.createVineyard(vineyard);
    },
    async updateVineyard(
      _,
      { vineyard }: { vineyard: VineyardInputUpdate },
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      return dataSources.vineyards.updateVineyard(vineyard);
    },
    async deleteVineyard(
      _,
      { id }: { id: string },
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      return dataSources.vineyards.deleteVineyard(id);
    },
  },
};

export default resolver;
