import Ads from '../data-sources/ads';
import Users from '../data-sources/users';
import { AdInput, AdInputUpdate, Resolvers } from '../generated/graphql';

interface StringIndexSignatureInterface {
  [index: string]: any;
}

interface MongoDataSource {
  ads: Ads;
  users: Users;
}

type StringIndexed<T> = T & StringIndexSignatureInterface;

export const resolver: StringIndexed<Resolvers> = {
  Query: {
    ads(_, args, { dataSources }: { dataSources: MongoDataSource }) {
      return dataSources.ads.getAds(args);
    },
    ad(_, args, { dataSources }: { dataSources: MongoDataSource }) {
      return dataSources.ads.getAd(args._id);
    },
  },

  Mutation: {
    createAd(
      _: any,
      { input }: { input: AdInput },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      const response = dataSources.ads.createAd(input);
      return response;
    },
    updateAd(
      _: any,
      { input }: { input: AdInputUpdate },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      const updateAd = dataSources.ads.updateAd(input);
      return updateAd;
    },
    deleteAd(
      _: any,
      { id }: { id: string },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      const removedAd = dataSources.ads.deleteAdWine(id);
      return removedAd;
    },
  },

  Ad: {
    __resolveType(ad) {
      return ad.typeProduct;
    },
    postedBy(ad, _, { dataSources }: { dataSources: MongoDataSource }) {
      return dataSources.users.getUser(ad.postedBy);
    },
    activeNegotiations(ad) {
      if (!ad.negotiations) {
        return 0;
      }
      return ad.negotiations?.length;
    },
    numberViews(ad) {
      if (!ad.viewedBy) {
        return 0;
      }
      return ad.viewedBy?.length;
    },
  },
};
