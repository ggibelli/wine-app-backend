import Ads from '../data-sources/ads';
import { AdInput, AdInputUpdate, Resolvers } from '../generated/graphql';
import { IUser, User } from '../models/user';

interface StringIndexSignatureInterface {
  [index: string]: any;
}

interface MongoDataSource {
  ads: Ads;
}

type StringIndexed<T> = T & StringIndexSignatureInterface;

export const resolver: StringIndexed<Resolvers> = {
  Ad: {
    __resolveType: (ad) => ad.typeProduct,
    // postedBy(ad) {
    //   const postedBy: IUser = User.findById(ad.postedBy).lean().exec();
    //   return postedBy;
    // },
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
    dateFormatted(ad) {
      return new Date(ad.datePosted).toISOString();
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
      return {
        success: createdAd ? true : false,
        message: createdAd ? 'Ad successfully created' : 'there was an error',
        ad: createdAd,
      };
    },
    updateAdWine(
      _: any,
      { ad, id }: { ad: AdInputUpdate; id: string },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      const updateAd = dataSources.ads.updateAdWine(ad, id);
      return {
        success: updateAd ? true : false,
        message: updateAd ? 'Ad successfully updated' : 'there was an error',
        ad: updateAd,
      };
    },
  },
};
