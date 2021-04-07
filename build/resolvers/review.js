"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolver = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const pubsub = new apollo_server_express_1.PubSub();
const REVIEW_CREATED = 'REVIEW_CREATED';
exports.resolver = {
    Query: {
        // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
        async reviews(_, args, { dataSources }) {
            return dataSources.reviews.getReviews(args);
        },
        async review(_, { id }, { dataSources }) {
            return dataSources.reviews.getReview(id);
        },
    },
    Mutation: {
        async createReview(_, { review }, { dataSources }) {
            const reviewResponse = await dataSources.reviews.createReview(review);
            if (!reviewResponse.errors.length) {
                await dataSources.messages.messageAdmin([review.forUser], `Hanno scritto di te ${review.content}`);
                await pubsub.publish(REVIEW_CREATED, {
                    reviewCreated: reviewResponse.response,
                });
            }
            return reviewResponse;
        },
        async updateReview(_, { review }, { dataSources }) {
            return dataSources.reviews.updateReview(review);
        },
        async deleteReview(_, { id }, { dataSources }) {
            return dataSources.reviews.deleteReview(id);
        },
    },
    Subscription: {
        reviewCreated: {
            subscribe: apollo_server_express_1.withFilter(() => pubsub.asyncIterator([REVIEW_CREATED]), (payload, _, { user }) => {
                return Boolean(
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                payload.reviewCreated.forUser._id.toString() ===
                    user._id.toHexString());
            }),
        },
    },
    Review: {
        async createdBy(review, _, { dataSources }) {
            return dataSources.users.getUser(review.createdBy);
        },
        async negotiation(review, _, { dataSources }) {
            return dataSources.negotiations.getNegotiation(review.negotiation);
        },
        async forUser(review, _, { dataSources }) {
            return dataSources.users.getUser(review.forUser);
        },
    },
};
