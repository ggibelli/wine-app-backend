"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolver = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const pubsub = new apollo_server_express_1.PubSub();
const MESSAGE_SENT = 'MESSAGE_SENT';
exports.resolver = {
    Query: {
        async messagesToUser(_, { sentTo }, { dataSources }) {
            return dataSources.messages.getMessagesTo(sentTo);
        },
        async messagesForNegotiation(_, args, { dataSources }) {
            return dataSources.messages.getMessagesForNegotiation(args);
        },
        async messages(_, __, { dataSources }) {
            return dataSources.messages.getMessages();
        },
        async message(_, { id }, { dataSources }) {
            return dataSources.messages.getMessage(id);
        },
    },
    Mutation: {
        async createMessage(_, { message }, { dataSources, user }) {
            const negotiation = await dataSources.negotiations.getNegotiation(message.negotiation);
            if (negotiation?.createdBy.toString() !== user._id.toString() &&
                negotiation?.forUserAd.toString() !== user._id.toString()) {
                return {
                    response: null,
                    errors: [
                        {
                            name: 'UserInputError',
                            text: 'You can only send messages if you own the negotiation',
                        },
                    ],
                };
            }
            const messageResponse = await dataSources.messages.createMessage(message);
            if (!messageResponse.errors.length) {
                await pubsub.publish(MESSAGE_SENT, {
                    messageSent: messageResponse.response,
                });
            }
            return messageResponse;
        },
    },
    Subscription: {
        messageSent: {
            subscribe: apollo_server_express_1.withFilter(() => pubsub.asyncIterator([MESSAGE_SENT]), (payload, _, { user }) => {
                return Boolean(payload.messageSent.sentTo.toString() === user._id.toString());
            }),
        },
    },
    Message: {
        async sentBy(message, _, { dataSources }) {
            return dataSources.users.getUser(message.sentBy);
        },
        async sentTo(message, _, { dataSources }) {
            return dataSources.users.getUser(message.sentTo);
        },
        async negotiation(message, _, { dataSources }) {
            return dataSources.negotiations.getNegotiation(message.negotiation);
        },
    },
};
