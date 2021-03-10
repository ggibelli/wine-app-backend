/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import Ads, { FollowUp } from '../data-sources/ads';
import Users from '../data-sources/users';
import Wines from '../data-sources/wines';
import Vineyards from '../data-sources/vineyards';
import {
  AdInput,
  AdInputUpdate,
  //NegotiationInputUpdate,
  Resolvers,
} from '../generated/graphql';
import Negotiations from '../data-sources/negotiations';
import { PubSub, withFilter } from 'apollo-server-express';
import { AdGraphQl } from '../models/ad';
import { UserGraphQl } from '../models/user';
import { loggerError } from '../utils/logger';

const pubsub = new PubSub();

const AD_POSTED = 'AD_POSTED';
const AD_REMOVED = 'AD_REMOVED';
const NEGOTIATION_CLOSED = 'NEGOTIATION_CLOSED';

interface StringIndexSignatureInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
}

interface MongoDataSource {
  ads: Ads;
  negotiations: Negotiations;
  users: Users;
  wines: Wines;
  vineyards: Vineyards;
}

type StringIndexed<T> = T & StringIndexSignatureInterface;

export const resolver: StringIndexed<Resolvers> = {
  Query: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    async ads(_, args, { dataSources }: { dataSources: MongoDataSource }) {
      console.log(args);
      return dataSources.ads.getAds(args);
    },
    async ad(
      _,
      { id },
      { dataSources, user }: { dataSources: MongoDataSource; user: UserGraphQl }
    ) {
      const ad = await dataSources.ads.getAd(id);
      if (user) {
        ad?.viewedBy?.addToSet(user._id);
        try {
          await ad?.save();
        } catch (e) {
          loggerError(e);
        }
      }
      return ad;
    },
  },

  Mutation: {
    async createAd(
      _,
      { input }: { input: AdInput },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      const adResponse = await dataSources.ads.createAd(input);
      if (!adResponse.errors.length) {
        await pubsub.publish(AD_POSTED, {
          adPostedFollowUp: adResponse.response,
          usersToNotify: adResponse.usersToNotify,
        });
      }
      return adResponse;
    },
    async updateAd(
      _,
      { input }: { input: AdInputUpdate },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      const adResponse = await dataSources.ads.updateAd(input);
      if (!adResponse.response?.isActive) {
        const negotiations = await dataSources.negotiations.getNegotiationsForAd(
          input._id
        );
        const users = negotiations
          .filter((negotiation) => !negotiation.isConcluded)
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          .map((negotiation) => negotiation.createdBy.toString());
        await pubsub.publish(AD_REMOVED, {
          adRemoved: adResponse.response,
          usersToNotify: users,
        });
      }
      return adResponse;
    },
    async deleteAd(
      _,
      { id }: { id: string },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      const adResponse = await dataSources.ads.deleteAd(id);
      const negotiations = await dataSources.negotiations.getNegotiationsForAd(
        id
      );
      const users = negotiations
        .filter((negotiation) => !negotiation.isConcluded)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        .map((negotiation) => negotiation.createdBy.toString());
      await pubsub.publish(AD_REMOVED, {
        adRemoved: adResponse.response,
        usersToNotify: users,
      });
      try {
        await dataSources.negotiations.deleteMany(adResponse.response?._id);
      } catch (e) {
        adResponse.errors.push({
          name: 'DeleteManyError',
          text:
            'Error during the removal of the negotiations linked to this ad',
        });
      }
      return adResponse;
    },
  },

  Subscription: {
    adPostedFollowUp: {
      subscribe: withFilter(
        () => pubsub.asyncIterator([AD_POSTED]),
        (
          payload: {
            adPostedFollowUp: AdGraphQl;
            usersToNotify: Array<FollowUp['userId']>;
          },
          _,
          { user }: { user: UserGraphQl }
        ) => {
          return payload.usersToNotify.includes(user._id.toHexString());
        }
      ),
    },
    adRemoved: {
      subscribe: withFilter(
        () => pubsub.asyncIterator([AD_REMOVED, NEGOTIATION_CLOSED]),
        (
          payload: {
            adRemoved: AdGraphQl;
            usersToNotify: string[];
          },
          _,
          { user }: { user: UserGraphQl }
        ) => {
          return payload.usersToNotify.includes(user._id.toHexString());
        }
      ),
    },
  },

  Ad: {
    __resolveType(ad) {
      return ad.typeProduct;
    },
    async postedBy(ad, _, { dataSources }: { dataSources: MongoDataSource }) {
      return dataSources.users.getUser(ad.postedBy);
    },
    async activeNegotiations(
      ad,
      _,
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return (await dataSources.negotiations.getNegotiationsForAd(ad._id))
        .length;
    },
    numberViews(ad) {
      if (!ad.viewedBy) {
        return 0;
      }
      return ad.viewedBy?.length;
    },
    async negotiations(
      ad,
      _,
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.negotiations.getNegotiationsForAd(ad._id);
    },
  },

  AdWine: {
    async wine(ad, _, { dataSources }: { dataSources: MongoDataSource }) {
      return dataSources.wines.getWineByName(ad.wineName);
    },
  },

  AdGrape: {
    async vineyard(ad, _, { dataSources }: { dataSources: MongoDataSource }) {
      return dataSources.vineyards.getVineyardByName(ad.vineyardName);
    },
  },
};
