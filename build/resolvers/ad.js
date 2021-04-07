"use strict";
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolver = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const logger_1 = require("../utils/logger");
const pubsub = new apollo_server_express_1.PubSub();
const AD_POSTED = 'AD_POSTED';
const AD_REMOVED = 'AD_REMOVED';
exports.resolver = {
    Query: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        async ads(_, args, { dataSources }) {
            return dataSources.ads.getAds(args);
        },
        async adsForUser(_, args, { dataSources }) {
            return dataSources.ads.getAdsByUser(args);
        },
        async ad(_, { id }, { dataSources, user }) {
            const ad = await dataSources.ads.getAd(id);
            if (user) {
                ad?.viewedBy?.addToSet(user._id);
                try {
                    await ad?.save();
                }
                catch (e) {
                    logger_1.loggerError(e);
                }
            }
            return ad;
        },
    },
    Mutation: {
        async createAd(_, { input }, { dataSources }) {
            const adResponse = await dataSources.ads.createAd(input);
            if (!adResponse.errors.length) {
                await dataSources.messages.messageAdmin(adResponse.usersToNotify, `Un annuncio per il vino: ${input.wineName} e stato creato`);
                await pubsub.publish(AD_POSTED, {
                    adPostedFollowUp: adResponse.response,
                    usersToNotify: adResponse.usersToNotify,
                });
            }
            return adResponse;
        },
        async updateAd(_, { input }, { dataSources }) {
            const adResponse = await dataSources.ads.updateAd(input);
            if (!adResponse.response?.isActive) {
                const negotiations = await dataSources.negotiations.getNegotiationsForAd(input._id);
                const users = negotiations
                    .filter((negotiation) => !negotiation.isConcluded)
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    .map((negotiation) => negotiation.createdBy.toString());
                await dataSources.messages.messageAdmin(users, `Un annuncio per il vino: ${input.wineName} e stato creato`);
                await pubsub.publish(AD_REMOVED, {
                    adRemoved: adResponse.response,
                    usersToNotify: users,
                });
            }
            return adResponse;
        },
        async deleteAd(_, { id }, { dataSources }) {
            const adResponse = await dataSources.ads.deleteAd(id);
            const negotiations = await dataSources.negotiations.getNegotiationsForAd(id);
            const users = negotiations
                .filter((negotiation) => !negotiation.isConcluded)
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                .map((negotiation) => negotiation.createdBy.toString());
            await dataSources.messages.messageAdmin(users, `L annuncio per il vino ${adResponse.response?.wineName} e stato rimosso`);
            await pubsub.publish(AD_REMOVED, {
                adRemoved: adResponse.response,
                usersToNotify: users,
            });
            try {
                await dataSources.negotiations.deleteMany(adResponse.response?._id);
            }
            catch (e) {
                adResponse.errors.push({
                    name: 'DeleteManyError',
                    text: 'Error during the removal of the negotiations linked to this ad',
                });
            }
            return adResponse;
        },
        async saveAd(_, { id }, { dataSources }) {
            const ad = await dataSources.ads.getAd(id);
            if (!ad) {
                return {
                    response: null,
                    errors: [{ text: 'Ad not found', name: 'General error' }],
                };
            }
            return await dataSources.users.saveAd(ad);
        },
    },
    Subscription: {
        adPostedFollowUp: {
            subscribe: apollo_server_express_1.withFilter(() => pubsub.asyncIterator([AD_POSTED]), (payload, _, { user }) => {
                return payload.usersToNotify.includes(user._id.toHexString());
            }),
        },
        adRemoved: {
            subscribe: apollo_server_express_1.withFilter(() => pubsub.asyncIterator([AD_REMOVED]), (payload, _, { user }) => {
                if (
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                payload.adRemoved.postedBy.toString() === user._id.toHexString()) {
                    return false;
                }
                return payload.usersToNotify.includes(user._id.toHexString());
            }),
        },
    },
    Ad: {
        __resolveType(ad) {
            return ad.typeProduct;
        },
        async postedBy(ad, _, { dataSources }) {
            return dataSources.users.getUser(ad.postedBy);
        },
        async activeNegotiations(ad, _, { dataSources }) {
            return await dataSources.negotiations.negotiationsActive(ad._id.toString());
        },
        numberViews(ad) {
            if (!ad.viewedBy) {
                return 0;
            }
            return ad.viewedBy?.length;
        },
        async negotiations(ad, _, { dataSources }) {
            return dataSources.negotiations.getNegotiationsForAd(ad._id);
        },
    },
    AdWine: {
        async wine(ad, _, { dataSources }) {
            return dataSources.wines.getWineByName(ad.wineName);
        },
    },
    AdGrape: {
        async vineyard(ad, _, { dataSources }) {
            return dataSources.vineyards.getVineyardByName(ad.vineyardName);
        },
    },
};
