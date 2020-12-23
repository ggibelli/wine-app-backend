/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  Resolvers,
  ReviewInput,
  ReviewInputUpdate,
} from '../generated/graphql';
import Users from '../data-sources/users';
import Reviews from '../data-sources/reviews';
import Ads from '../data-sources/ads';
import Messages from '../data-sources/messages';
import Negotiations from '../data-sources/negotiations';
import { PubSub, withFilter } from 'apollo-server-express';
import { ReviewGraphQl } from '../models/review';
import { UserGraphQl } from '../models/user';

const pubsub = new PubSub();

const REVIEW_CREATED = 'REVIEW_CREATED';

interface StringIndexSignatureInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
}

type StringIndexed<T> = T & StringIndexSignatureInterface;

interface MongoDataSource {
  users: Users;
  reviews: Reviews;
  ads: Ads;
  messages: Messages;
  negotiations: Negotiations;
}

export const resolver: StringIndexed<Resolvers> = {
  Query: {
    async reviews(_, __, { dataSources }: { dataSources: MongoDataSource }) {
      return dataSources.reviews.getReviews();
    },
    async review(_, { id }, { dataSources }: { dataSources: MongoDataSource }) {
      return dataSources.reviews.getReview(id);
    },
  },
  Mutation: {
    async createReview(
      _,
      { review }: { review: ReviewInput },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      const reviewResponse = await dataSources.reviews.createReview(review);
      if (!reviewResponse.errors.length) {
        await pubsub.publish(REVIEW_CREATED, {
          reviewCreated: reviewResponse.response,
        });
      }
      return reviewResponse;
    },

    async updateReview(
      _,
      { review }: { review: ReviewInputUpdate },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.reviews.updateReview(review);
    },
    async deleteReview(
      _,
      { id }: { id: string },
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.reviews.deleteReview(id);
    },
  },

  Subscription: {
    reviewCreated: {
      subscribe: withFilter(
        () => pubsub.asyncIterator([REVIEW_CREATED]),
        (
          payload: { reviewCreated: ReviewGraphQl },
          _,
          { user }: { user: UserGraphQl }
        ) => {
          return Boolean(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            payload.reviewCreated.forUser._id.toString() ===
              user._id.toHexString()
          );
        }
      ),
    },
  },

  Review: {
    async createdBy(
      review,
      _,
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.users.getUser(review.createdBy);
    },
    async negotiation(
      review,
      _,
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.negotiations.getNegotiation(review.negotiation);
    },
    async forUser(
      review,
      _,
      { dataSources }: { dataSources: MongoDataSource }
    ) {
      return dataSources.users.getUser(review.forUser);
    },
  },
};
