/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { PubSub, withFilter } from 'apollo-server-express';
import { LeanDocument } from 'mongoose';
import Ads, { FollowUp } from '../data-sources/ads';
import Users from '../data-sources/users';
import Wines from '../data-sources/wines';
import Vineyards from '../data-sources/vineyards';
import {
  AdInput,
  AdInputUpdate,
  // NegotiationInputUpdate,
  Resolvers,
} from '../generated/graphql';
import Negotiations from '../data-sources/negotiations';
import {
  AdDocument,
  IsPopulated,
  UserDocument,
} from '../interfaces/mongoose.gen';
import { loggerError } from '../utils/logger';
import Messages from '../data-sources/messages';

const pubsub = new PubSub();

const AD_POSTED = 'AD_POSTED';
const AD_REMOVED = 'AD_REMOVED';
const AD_SAVED = 'AD_SAVED';
// const NEGOTIATION_CLOSED = 'NEGOTIATION_CLOSED';

interface StringIndexSignatureInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
}

interface MongoDataSource {
  ads: Ads;
  negotiations: Negotiations;
  messages: Messages;
  users: Users;
  wines: Wines;
  vineyards: Vineyards;
}

type StringIndexed<T> = T & StringIndexSignatureInterface;

const resolver: StringIndexed<Resolvers> = {
  Query: {
    async ads(_, args, { dataSources }: { dataSources: MongoDataSource }) {
      return dataSources.ads.getAds(args);
    },
    async adsForUser(
      _,
      args,
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      return dataSources.ads.getAdsByUser(args);
    },
    async ad(
      _,
      { id },
      {
        dataSources,
        user,
      }: { dataSources: MongoDataSource; user: LeanDocument<UserDocument> },
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
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      const adResponse = await dataSources.ads.createAd(input);
      if (!adResponse.errors.length) {
        await dataSources.messages.messageAdmin(
          adResponse.usersToNotify,
          `Un annuncio per il vino: ${input.wineName} e stato creato`,
        );
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
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      const adResponse = await dataSources.ads.updateAd(input);
      if (!adResponse.response?.isActive) {
        const negotiations =
          await dataSources.negotiations.getNegotiationsForAd(input._id);
        const users = negotiations
          .filter((negotiation) => !negotiation.isConcluded)
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          .map((negotiation) => negotiation.createdBy.toString());
        await dataSources.messages.messageAdmin(
          users,
          `Un annuncio per il vino: ${input.wineName} e stato creato`,
        );
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
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      const adResponse = await dataSources.ads.deleteAd(id);
      const negotiations = await dataSources.negotiations.getNegotiationsForAd(
        id,
      );
      const users = negotiations
        .filter((negotiation) => !negotiation.isConcluded)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        .map((negotiation) => negotiation.createdBy.toString());
      await dataSources.messages.messageAdmin(
        users,
        `L annuncio per il vino ${adResponse.response?.wineName} e stato rimosso`,
      );
      await pubsub.publish(AD_REMOVED, {
        adRemoved: adResponse.response,
        usersToNotify: users,
      });
      if (adResponse.response?._id) {
        try {
          await dataSources.negotiations.deleteMany(adResponse.response?._id);
        } catch (e) {
          adResponse.errors.push({
            name: 'DeleteManyError',
            text: 'Error during the removal of the negotiations linked to this ad',
          });
        }
      }
      return adResponse;
    },
    async saveAd(
      _,
      { id }: { id: string },
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      const ad = await dataSources.ads.getAd(id);
      if (!ad) {
        return {
          response: null,
          errors: [{ text: 'Ad not found', name: 'General error' }],
        };
      }
      // Aggiungere logica annuncio salvato e rimosso
      await pubsub.publish(AD_SAVED, {
        adSaved: ad,
      });
      await dataSources.messages.messageAdmin(
        [ad.postedBy.toString()],
        `Una cantina ha salvato il tuo annuncio per il vino: ${ad.wineName}`,
      );
      return dataSources.users.saveAd(ad);
    },
  },

  Subscription: {
    adPostedFollowUp: {
      subscribe: withFilter(
        () => pubsub.asyncIterator([AD_POSTED]),
        (
          payload: {
            adPostedFollowUp: LeanDocument<AdDocument>;
            usersToNotify: Array<FollowUp['userId']>;
          },
          _,
          {
            user,
          }: { user: LeanDocument<UserDocument>; dataSources: MongoDataSource },
        ) => payload.usersToNotify.includes(user._id.toHexString()),
      ),
    },
    adRemoved: {
      subscribe: withFilter(
        () => pubsub.asyncIterator([AD_REMOVED]),
        (
          payload: {
            adRemoved: LeanDocument<AdDocument>;
            usersToNotify: string[];
          },
          _,
          {
            user,
          }: { user: LeanDocument<UserDocument>; dataSources: MongoDataSource },
        ) => {
          if (
            payload.adRemoved.postedBy.toString() === user._id.toHexString()
          ) {
            return false;
          }
          return payload.usersToNotify.includes(user._id.toHexString());
        },
      ),
    },
    adSaved: {
      subscribe: withFilter(
        () => pubsub.asyncIterator([AD_SAVED]),
        (
          payload: {
            adSaved: LeanDocument<AdDocument>;
          },
          _,
          {
            user,
          }: { user: LeanDocument<UserDocument>; dataSources: MongoDataSource },
        ) => {
          console.log('yo');
          console.log(
            payload.adSaved.postedBy.toString(),
            user._id.toHexString(),
          );
          return payload.adSaved.postedBy.toString() === user._id.toHexString();
        },
      ),
    },
  },

  Ad: {
    __resolveType(ad) {
      return ad.typeProduct;
    },
    async postedBy(ad, _, { dataSources }: { dataSources: MongoDataSource }) {
      if (!IsPopulated(ad.postedBy)) {
        return dataSources.users.getUser(ad.postedBy.toHexString());
      }
      return dataSources.users.getUser(ad.postedBy._id.toHexString());
    },
    async activeNegotiations(
      ad,
      _,
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      return dataSources.negotiations.negotiationsActive(ad._id.toString());
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
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      return dataSources.negotiations.getNegotiationsForAd(ad._id);
    },
    savedTimes(ad) {
      if (!ad.savedBy) {
        return 0;
      }
      return ad.savedBy?.length;
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

export default resolver;
