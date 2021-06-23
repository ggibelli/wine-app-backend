"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const resolver = {
    Query: {
        async users(_, __, { dataSources }) {
            return dataSources.users.getUsers();
        },
        async user(_, { id }, { dataSources }) {
            return dataSources.users.getUser(id);
        },
        me(_, __, { user }) {
            return user;
        },
    },
    Mutation: {
        async createUser(_, { user }, { dataSources }) {
            return dataSources.users.createUser(user);
        },
        async updateUser(_, { user }, { dataSources }) {
            return dataSources.users.updateUser(user);
        },
        async deleteUser(_, { id }, { dataSources }) {
            return dataSources.users.deleteUser(id);
        },
        async login(_, { email, password }, { dataSources }) {
            return dataSources.users.login(email, password);
        },
    },
    User: {
        async ads(user, _, { dataSources }) {
            return dataSources.ads.getAdsUserType(user._id.toString());
        },
        async messages(root, _, { dataSources, user, }) {
            if (root._id.toString() === user._id.toString()) {
                return dataSources.messages.getMessages();
            }
            throw new apollo_server_express_1.ForbiddenError('You can only see your own messages');
        },
        async negotiations(root, _, { dataSources, user, }) {
            if (root._id.toString() === user._id.toString()) {
                return dataSources.negotiations.getNegotiationsForUserType();
            }
            throw new apollo_server_express_1.ForbiddenError('You can only see your own negotiations');
        },
        async savedAds(root, _, { dataSources, user, }) {
            if (root._id.toString() === user._id.toHexString()) {
                if (user.savedAds?.length) {
                    const ids = user.savedAds.map((ids) => ids.toString());
                    const savedAds = await dataSources.ads.findManyByIds(ids);
                    if (!savedAds.length)
                        return [];
                    return (savedAds.sort((a, b) => {
                        if (!b.datePosted || !a.datePosted)
                            return 1;
                        return b.datePosted - a.datePosted;
                    }));
                }
                return [];
            }
            throw new apollo_server_express_1.ForbiddenError('You can only see your own saved ads');
        },
        async reviews(root, _, { dataSources, user, }) {
            if (root._id.toString() === user._id.toString()) {
                return dataSources.reviews.getReviewForUser();
            }
            throw new apollo_server_express_1.ForbiddenError('You can only see your own negotiations');
        },
        email(root, _, { user }) {
            if (root._id.toString() === user._id.toString()) {
                return root.email;
            }
            if (!root.hideContact) {
                return root.email;
            }
            return 'The user prefers to hide the email';
        },
        phoneNumber(root, _, { user }) {
            if (root._id.toString() === user._id.toString()) {
                return root.phoneNumber;
            }
            if (!root.hideContact) {
                return root.phoneNumber;
            }
            return 'The user prefers to hide the phone number';
        },
    },
};
exports.default = resolver;
