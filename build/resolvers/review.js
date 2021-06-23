"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-call */
const apollo_server_express_1 = require("apollo-server-express");
const mongoose_gen_1 = require("../interfaces/mongoose.gen");
const pubsub = new apollo_server_express_1.PubSub();
const REVIEW_CREATED = 'REVIEW_CREATED';
const resolver = {
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
                if (mongoose_gen_1.IsPopulated(payload.reviewCreated.forUser)) {
                    return Boolean(payload.reviewCreated.forUser._id.toHexString()
                        === user._id.toString());
                }
                return Boolean(payload.reviewCreated.forUser.toHexString()
                    === user._id.toString());
            }),
        },
    },
    Review: {
        async createdBy(review, _, { dataSources }) {
            if (mongoose_gen_1.IsPopulated(review.createdBy)) {
                return dataSources.users.getUser(review.createdBy._id.toHexString());
            }
            return dataSources.users.getUser(review.createdBy.toHexString());
        },
        async negotiation(review, _, { dataSources }) {
            if (mongoose_gen_1.IsPopulated(review.negotiation)) {
                return dataSources.negotiations.getNegotiation(review.negotiation._id.toHexString());
            }
            return dataSources.negotiations.getNegotiation(review.negotiation.toHexString());
        },
        async forUser(review, _, { dataSources }) {
            if (mongoose_gen_1.IsPopulated(review.forUser)) {
                return dataSources.users.getUser(review.forUser._id.toHexString());
            }
            return dataSources.users.getUser(review.forUser.toHexString());
        },
    },
};
exports.default = resolver;
