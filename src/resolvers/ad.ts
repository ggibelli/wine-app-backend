import { MongoDataSource } from 'apollo-datasource-mongodb';
import Ads from '../data-sources/ads';
import { Resolvers } from '../generated/graphql';
import { Ad } from '../models/ad';
import { IUserDoc, User } from '../models/user';
import { TypeProduct } from '../types';

interface StringIndexSignatureInterface {
  [index: string]: any;
}

interface MongoDataSource {
  ads: typeof Ad;
}

type StringIndexed<T> = T & StringIndexSignatureInterface;

export const resolver: StringIndexed<Resolvers> = {
  Ad: {
    __resolveType: (ad) => ad.typeProduct,
    postedBy(ad) {
      return User.findById(ad.postedBy).lean().exec();
    },
    activeNegotiations(ad) {
      return ad.negotiations?.length;
    },
    numberViews(ad) {
      return ad.vievedBy?.length;
    },
    dateFormatted(ad) {
      return new Date(ad.datePosted).toISOString();
    },
  },

  Query: {
    adsWine: (_, args, { dataSources }: { dataSources: MongoDataSource }) => {
      return dataSources.ads
        .find({
          typeProduct: TypeProduct.ADWINE,
          wineName: args.wineName,
        })
        .lean()
        .exec();
    },
    ad: async (_, args, { dataSources }: { dataSources: MongoDataSource }) => {
      return await dataSources.ads.getAd(args._id);
    },
    adsVineyard: async (
      _,
      args,
      { dataSources }: { dataSources: MongoDataSource }
    ) => {
      return await dataSources.ads.getAdsVineyard(args);
    },
  },

  Mutation: {
    createAdWine: async (
      _,
      { ad },
      {
        dataSources,
        currentUser,
      }: { dataSources: MongoDataSource; currentUser: IUserDoc }
    ) => {
      return await dataSources.ads.createAdWine(ad);
    },
  },
};
