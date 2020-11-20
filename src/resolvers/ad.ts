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
  Ad: {
    __resolveType: (ad) => ad.typeProduct,
    postedBy(ad, _, { dataSources }: { dataSources: MongoDataSource }) {
      const postedBy = dataSources.users.getUser(ad.postedBy);
      return postedBy;
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

  Query: {
    ads(_, args, { dataSources }: { dataSources: MongoDataSource }) {
      return dataSources.ads.getAds(args);
    },
    ad(_, args, { dataSources }: { dataSources: MongoDataSource }) {
      return dataSources.ads.getAd(args._id);
    },
  },

  Mutation: {
    createAdWine(
      _: any,
      { input }: { input: AdInput },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      const createdAd = dataSources.ads.createAd(input);
      return createdAd;
    },
    updateAdWine(
      _: any,
      { ad, id }: { ad: AdInputUpdate; id: string },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      const updateAd = dataSources.ads.updateAdWine(ad, id);
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
};
