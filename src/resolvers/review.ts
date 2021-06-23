/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PubSub, withFilter } from 'apollo-server-express';
import { LeanDocument } from 'mongoose';
import {
  QueryReviewsArgs,
  Resolvers,
  ReviewInput,
  ReviewInputUpdate,
} from '../generated/graphql';
import Users from '../data-sources/users';
import Reviews from '../data-sources/reviews';
import Ads from '../data-sources/ads';
import Messages from '../data-sources/messages';
import Negotiations from '../data-sources/negotiations';
import {
  IsPopulated,
  ReviewDocument,
  UserDocument,
} from '../interfaces/mongoose.gen';

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

const resolver: StringIndexed<Resolvers> = {
  Query: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async reviews(
      _,
      args: QueryReviewsArgs,
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      return dataSources.reviews.getReviews(args);
    },
    async review(_, { id }, { dataSources }: { dataSources: MongoDataSource }) {
      return dataSources.reviews.getReview(id);
    },
  },
  Mutation: {
    async createReview(
      _,
      { review }: { review: ReviewInput },
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      const reviewResponse = await dataSources.reviews.createReview(review);
      if (!reviewResponse.errors.length) {
        await dataSources.messages.messageAdmin(
          [review.forUser],
          `Hanno scritto di te ${review.content}`,
        );
        await pubsub.publish(REVIEW_CREATED, {
          reviewCreated: reviewResponse.response,
        });
      }
      return reviewResponse;
    },

    async updateReview(
      _,
      { review }: { review: ReviewInputUpdate },
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      return dataSources.reviews.updateReview(review);
    },
    async deleteReview(
      _,
      { id }: { id: string },
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      return dataSources.reviews.deleteReview(id);
    },
  },

  Subscription: {
    reviewCreated: {
      subscribe: withFilter(
        () => pubsub.asyncIterator([REVIEW_CREATED]),
        (
          payload: { reviewCreated: LeanDocument<ReviewDocument> },
          _,
          { user }: { user: LeanDocument<UserDocument> },
        ) => {
          if (IsPopulated(payload.reviewCreated.forUser)) {
            return Boolean(
          payload.reviewCreated.forUser._id.toHexString()
              === user._id.toString(),
        )
          }
          return Boolean(
          payload.reviewCreated.forUser.toHexString()
              === user._id.toString(),
        )
      },
      ),
    },
  },

  Review: {
    async createdBy(
      review,
      _,
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      if (IsPopulated(review.createdBy)) {
        return dataSources.users.getUser(review.createdBy._id.toHexString());
      }
      return dataSources.users.getUser(review.createdBy.toHexString());
    },
    async negotiation(
      review,
      _,
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      if (IsPopulated(review.negotiation)) {
        return dataSources.negotiations.getNegotiation(
          review.negotiation._id.toHexString(),
        );
      }
      return dataSources.negotiations.getNegotiation(
        review.negotiation.toHexString(),
      );
    },
    async forUser(
      review,
      _,
      { dataSources }: { dataSources: MongoDataSource },
    ) {
      if (IsPopulated(review.forUser)) {
        return dataSources.users.getUser(review.forUser._id.toHexString());
      }
      return dataSources.users.getUser(review.forUser.toHexString());
    },
  },
};

export default resolver;
