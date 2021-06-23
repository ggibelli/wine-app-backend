"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
const apollo_server_express_1 = require("apollo-server-express");
const mongoose_gen_1 = require("../interfaces/mongoose.gen");
const pubsub = new apollo_server_express_1.PubSub();
const MESSAGE_SENT = 'MESSAGE_SENT';
const resolver = {
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
        async createMessage(_, { message }, { dataSources, user, }) {
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
        // updateMessage(
        //   _,
        //   { message }: { message: MessageInputUpdate },
        //   { dataSources }: { dataSources: MongoDataSource }
        // ) {
        //   return dataSources.messages.updateMessage(message);
        // },
        // deleteMessage(
        //   _: void,
        //   { id }: { id: string },
        //   { dataSources }: { dataSources: MongoDataSource }
        // ) {
        //   return dataSources.messages.deleteMessage(id);
        // },
    },
    Subscription: {
        messageSent: {
            subscribe: apollo_server_express_1.withFilter(() => pubsub.asyncIterator([MESSAGE_SENT]), (payload, _, { user }) => Boolean(payload.messageSent.sentTo.toString() === user._id.toString())),
        },
    },
    Message: {
        async sentBy(message, _, { dataSources }) {
            if (mongoose_gen_1.IsPopulated(message.sentBy)) {
                return dataSources.users.getUser(message.sentBy._id.toHexString());
            }
            return dataSources.users.getUser(message.sentBy.toHexString());
        },
        async sentTo(message, _, { dataSources }) {
            if (mongoose_gen_1.IsPopulated(message.sentTo)) {
                return dataSources.users.getUser(message.sentTo._id.toHexString());
            }
            return dataSources.users.getUser(message.sentTo.toHexString());
        },
        async negotiation(message, _, { dataSources }) {
            if (mongoose_gen_1.IsPopulated(message.negotiation)) {
                return dataSources.negotiations.getNegotiation(message.negotiation._id.toHexString());
            }
            return dataSources.negotiations.getNegotiation(message.negotiation.toHexString());
        },
    },
};
exports.default = resolver;
