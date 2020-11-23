import Ads from '../data-sources/ads';
import Users from '../data-sources/users';
import { AdInput, AdInputUpdate, Resolvers } from '../generated/graphql';
// import { IAd } from '../models/ad';

interface StringIndexSignatureInterface {
  [index: string]: any;
}

interface MongoDataSource {
  ads: Ads;
  users: Users;
  // wines: Wines;
}

type StringIndexed<T> = T & StringIndexSignatureInterface;

export const resolver: StringIndexed<Resolvers> = {
  Ad: {
    __resolveType: (ad) => ad.typeProduct,
    postedBy(ad, _, { dataSources }: { dataSources: MongoDataSource }) {
      console.log('ooo');
      const postedBy = dataSources.users.getUser(ad.postedBy);
      console.log('chiamato');
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
    // wine(ad: IAd, _: void, { dataSources }: { dataSources: MongoDataSource }) {
    //   return dataSources.wines.getWine(ad.wineName)
    // },
  },
  AdWine: {
    postedBy(ad, _, { dataSources }: { dataSources: MongoDataSource }) {
      console.log('ooo');
      const postedBy = dataSources.users.getUser(ad);

      return postedBy;
    },
  },

  // AdWine: {
  // wine(ad, { dataSources }: { dataSources: MongoDataSource }) {
  //   return dataSources.wines.getWine(ad.wineName)
  // },
  // },

  //AdGrape: {
  // vineyard(ad, { dataSources }: { dataSources: MongoDataSource }) {
  //   return dataSources.vineyard.getVineyard(ad.vineyardName)
  // },
  //},

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
      const createdAd = dataSources.ads.createAd(input);
      return createdAd;
    },
    updateAd(
      _: any,
      { input }: { input: AdInputUpdate },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      const updateAd = dataSources.ads.updateAdWine(input);
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
