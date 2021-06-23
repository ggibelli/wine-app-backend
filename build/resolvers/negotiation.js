"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
const apollo_server_express_1 = require("apollo-server-express");
const mongoose_gen_1 = require("../interfaces/mongoose.gen");
const logger_1 = require("../utils/logger");
// import { LeanDocument<IAdDoc> } from '../models/ad';
const pubsub = new apollo_server_express_1.PubSub();
const NEGOTIATION_CREATED = 'NEGOTIATION_CREATED';
const NEGOTIATION_CLOSED = 'NEGOTIATION_CLOSED';
const resolver = {
    Query: {
        async negotiationsWithUser(_, { forUserAd }, { dataSources }) {
            return dataSources.negotiations.getNegotiationsForUser(forUserAd);
        },
        async negotiationsForAd(_, { ad }, { dataSources }) {
            return dataSources.negotiations.getNegotiationsForAd(ad);
        },
        async negotiations(_, args, { dataSources }) {
            return dataSources.negotiations.getNegotiations(args);
        },
        async negotiation(_, { id }, { dataSources }) {
            return dataSources.negotiations.getNegotiation(id);
        },
    },
    Mutation: {
        // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
        async createNegotiation(_, { negotiation }, { dataSources }) {
            const negotiationResponse = await dataSources.negotiations.createNegotiation(negotiation);
            if (!negotiationResponse.errors.length) {
                await dataSources.messages.messageAdmin([negotiation.forUserAd], `Trattativa creata per il tuo annuncio ${negotiation.ad}`);
                await pubsub.publish(NEGOTIATION_CREATED, {
                    negotiationCreated: negotiationResponse.response,
                });
            }
            if (negotiationResponse.response?._id) {
                try {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    await dataSources.messages.createMessage({
                        negotiation: negotiationResponse.response?._id.toHexString(),
                        sentTo: negotiation.forUserAd,
                        content: 'negoziazione aperta',
                    });
                }
                catch (e) {
                    logger_1.loggerError(e);
                }
            }
            return negotiationResponse;
        },
        async updateNegotiation(_, { negotiation }, { dataSources, user, }) {
            const updatedNegotiationResponse = await dataSources.negotiations.updateNegotiation(negotiation);
            if (updatedNegotiationResponse.response?.isConcluded) {
                let ad;
                if (mongoose_gen_1.IsPopulated(updatedNegotiationResponse.response.ad)) {
                    ad = await dataSources.ads.getAd(updatedNegotiationResponse.response.ad._id.toHexString());
                }
                else {
                    ad = await dataSources.ads.getAd(updatedNegotiationResponse.response.ad.toHexString());
                }
                if (!ad) {
                    return {
                        response: null,
                        errors: [
                            { text: 'General error ad not found', name: 'General Error' },
                        ],
                    };
                }
                ad.isActive = false;
                try {
                    await ad.save();
                }
                catch (e) {
                    logger_1.loggerError(e);
                    return {
                        response: null,
                        errors: [{ name: 'General Error', text: 'Error updating the ad' }],
                    };
                }
                const negotiations = await dataSources.negotiations.getNegotiationsForAd(ad._id);
                const usersToNotifySet = new Set();
                negotiations.forEach((neg) => {
                    usersToNotifySet.add(neg.forUserAd.toString());
                    usersToNotifySet.add(neg.createdBy.toString());
                });
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const userToNotify = updatedNegotiationResponse.response.createdBy.toString()
                    === user._id.toString()
                    ? updatedNegotiationResponse.response.forUserAd.toString()
                    : updatedNegotiationResponse.response.createdBy.toString();
                const usersToNotify = Array.from(usersToNotifySet).filter((u) => u !== user._id.toString());
                await dataSources.messages.messageAdmin(usersToNotify, `L'annuncio ${ad.wineName} non e piu disponibile`);
                await pubsub.publish(NEGOTIATION_CLOSED, {
                    negotiationClosed: ad,
                    userToNotify,
                    usersToNotify,
                    userToNotNotify: user._id.toString(),
                });
            }
            return updatedNegotiationResponse;
        },
        async deleteNegotiation(_, { id }, { dataSources }) {
            const deletedNegotiation = await dataSources.negotiations.deleteNegotiation(id);
            if (!deletedNegotiation.errors.length) {
                const deletedMessages = await dataSources.messages.deleteMessages(id);
                deletedMessages
                    ? deletedNegotiation?.errors.push(deletedMessages)
                    : null;
            }
            return deletedNegotiation;
        },
    },
    Subscription: {
        negotiationCreated: {
            subscribe: apollo_server_express_1.withFilter(() => pubsub.asyncIterator([NEGOTIATION_CREATED]), (payload, _, { user }) => {
                if (mongoose_gen_1.IsPopulated(payload.negotiationCreated.forUserAd)) {
                    return Boolean(payload.negotiationCreated.forUserAd._id.toHexString()
                        === user._id.toHexString());
                }
                return Boolean(payload.negotiationCreated.forUserAd.toHexString()
                    === user._id.toHexString());
            }),
        },
        negotiationClosed: {
            subscribe: apollo_server_express_1.withFilter(() => pubsub.asyncIterator([NEGOTIATION_CLOSED]), (payload, _, { user, }) => {
                if (user._id.toHexString() === payload.userToNotNotify)
                    return false;
                return payload.userToNotify === user._id.toString();
            }),
        },
    },
    Negotiation: {
        async createdBy(negotiation, _, { dataSources }) {
            if (mongoose_gen_1.IsPopulated(negotiation.createdBy)) {
                return dataSources.users.getUser(negotiation.createdBy._id.toHexString());
            }
            return dataSources.users.getUser(negotiation.createdBy.toHexString());
        },
        async ad(negotiation, _, { dataSources }) {
            if (mongoose_gen_1.IsPopulated(negotiation.ad)) {
                return dataSources.ads.getAd(negotiation.ad._id.toHexString());
            }
            return dataSources.ads.getAd(negotiation.ad.toHexString());
        },
        async forUserAd(negotiation, _, { dataSources }) {
            if (mongoose_gen_1.IsPopulated(negotiation.forUserAd)) {
                return dataSources.users.getUser(negotiation.forUserAd._id.toHexString());
            }
            return dataSources.users.getUser(negotiation.forUserAd.toHexString());
        },
        async messages(negotiation, _, { dataSources }) {
            return dataSources.messages.getMessagesNegotiationType(negotiation._id.toHexString());
        },
        async review(negotiation, _, { dataSources }) {
            return dataSources.reviews.getReviewForNegotiation(negotiation._id.toHexString());
        },
    },
};
exports.default = resolver;
