/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  Resolvers,
  NegotiationInput,
  NegotiationInputUpdate,
  //NegotiationInputUpdate,
} from '../generated/graphql';
import Users from '../data-sources/users';
import Negotiations from '../data-sources/negotiations';
import Ads from '../data-sources/ads';
import Messages from '../data-sources/messages';
import { PubSub, withFilter } from 'apollo-server-express';
import { NegotiationGraphQl } from '../models/negotiation';
import { UserGraphQl } from '../models/user';
// import { AdGraphQl } from '../models/ad';

const pubsub = new PubSub();

const NEGOTIATION_CREATED = 'NEGOTIATION_CREATED';
const NEGOTIATION_CLOSED = 'NEGOTIATION_CLOSED';

interface StringIndexSignatureInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
}

type StringIndexed<T> = T & StringIndexSignatureInterface;

interface MongoDataSource {
  users: Users;
  negotiations: Negotiations;
  ads: Ads;
  messages: Messages;
}

export const resolver: StringIndexed<Resolvers> = {
  Query: {
    async negotiationsWithUser(
      _,
      { forUserAd },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.negotiations.getNegotiationsForUser(forUserAd);
    },
    async negotiationsForAd(
      _,
      { ad },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.negotiations.getNegotiationsForAd(ad);
    },
    async negotiations(
      _,
      args,
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      console.log('negs');
      return dataSources.negotiations.getNegotiations(args);
    },
    async negotiation(
      _,
      { id },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.negotiations.getNegotiation(id);
    },
  },
  Mutation: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async createNegotiation(
      _,
      { negotiation }: { negotiation: NegotiationInput },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      const negotiationResponse = await dataSources.negotiations.createNegotiation(
        negotiation
      );
      if (!negotiationResponse.errors.length) {
        await pubsub.publish(NEGOTIATION_CREATED, {
          negotiationCreated: negotiationResponse.response,
        });
      }
      return negotiationResponse;
    },

    async updateNegotiation(
      _,
      { negotiation }: { negotiation: NegotiationInputUpdate },
      { dataSources, user }: { dataSources: MongoDataSource; user: UserGraphQl }
    ) {
      const updatedNegotiationResponse = await dataSources.negotiations.updateNegotiation(
        negotiation
      );
      if (updatedNegotiationResponse.response?.isConcluded) {
        const ad = await dataSources.ads.getAd(
          updatedNegotiationResponse.response.ad
        );
        const negotiations = await dataSources.negotiations.getNegotiationsForAd(
          ad?._id
        );
        const openNegotiations = negotiations.filter(
          (negotiation) => !negotiation.isConcluded
        );
        const usersToNotifySet = new Set();
        console.log(openNegotiations);
        openNegotiations.forEach((neg) => {
          usersToNotifySet.add(neg.createdBy.toString());
          usersToNotifySet.add(neg.forUserAd.toString());
        });
        negotiations.forEach((neg) => {
          usersToNotifySet.add(neg.forUserAd.toString());
          usersToNotifySet.add(neg.createdBy.toString());
        });

        const usersToNotify = Array.from(usersToNotifySet);
        await pubsub.publish(NEGOTIATION_CLOSED, {
          negotiationClosed: ad,
          usersToNotify,
          userToNotNotify: user._id.toString(),
        });
      }
      return updatedNegotiationResponse;
    },

    async deleteNegotiation(
      _,
      { id }: { id: string },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.negotiations.deleteNegotiation(id);
    },
  },

  Subscription: {
    negotiationCreated: {
      subscribe: withFilter(
        () => pubsub.asyncIterator([NEGOTIATION_CREATED]),
        (
          payload: { negotiationCreated: NegotiationGraphQl },
          _,
          { user }: { user: UserGraphQl }
        ) => {
          return Boolean(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            payload.negotiationCreated.forUserAd._id.toString() ===
              user._id.toHexString()
          );
        }
      ),
    },
    negotiationClosed: {
      subscribe: withFilter(
        () => pubsub.asyncIterator([NEGOTIATION_CLOSED]),
        (payload, _, { user }: { user: UserGraphQl }) => {
          console.log(payload);
          if (user._id.toHexString() === payload.userToNotNotify) return false;
          return payload.usersToNotify.includes(user._id.toHexString());
        }
      ),
    },
  },

  Negotiation: {
    async createdBy(
      negotiation,
      _,
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.users.getUser(negotiation.createdBy);
    },
    async ad(
      negotiation,
      _,
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.ads.getAd(negotiation.ad);
    },
    async forUserAd(
      negotiation,
      _,
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.users.getUser(negotiation.forUserAd._id);
    },
    async messages(
      negotiation,
      _,
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.messages.getMessagesForNegotiation(negotiation._id);
    },
  },
};
