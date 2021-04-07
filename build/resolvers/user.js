"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolver = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.resolver = {
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
        async messages(root, _, { dataSources, user }) {
            if (root._id.toString() === user._id.toString()) {
                return dataSources.messages.getMessages();
            }
            throw new apollo_server_express_1.ForbiddenError('You can only see your own messages');
        },
        async negotiations(root, _, { dataSources, user }) {
            if (root._id.toString() === user._id.toString()) {
                return dataSources.negotiations.getNegotiationsForUserType();
            }
            throw new apollo_server_express_1.ForbiddenError('You can only see your own negotiations');
        },
        async savedAds(root, _, { dataSources, user }) {
            if (root._id.toString() === user._id.toString()) {
                if (user.savedAds?.length) {
                    return dataSources.ads.findManyByIds(user.savedAds);
                }
                return [];
            }
            throw new apollo_server_express_1.ForbiddenError('You can only see your own saved ads');
        },
        async reviews(root, _, { dataSources, user }) {
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
