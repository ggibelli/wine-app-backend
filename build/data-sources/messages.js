"use strict";
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_mongodb_1 = require("apollo-datasource-mongodb");
const logger_1 = require("../utils/logger");
const config_1 = require("../utils/config");
class Messages extends apollo_datasource_mongodb_1.MongoDataSource {
    async getMessage(id) {
        const message = await this.findOneById(id);
        if (message)
            message.isViewed = true;
        try {
            await message?.save();
        }
        catch (e) {
            logger_1.loggerError(e);
        }
        return message;
    }
    async getMessages() {
        const userCtx = this.context.user;
        if (userCtx.isAdmin) {
            return this.model.find({}).lean().exec();
        }
        await this.collection.createIndex({ sentTo: 1 });
        await this.collection.createIndex({ sentBy: 1 });
        return this.model
            .find({
            $or: [{ sentBy: userCtx._id }, { sentTo: userCtx._id }],
        })
            .lean()
            .exec();
    }
    async getMessagesTo(sentTo) {
        const userCtx = this.context.user;
        return this.model
            .find({
            sentBy: userCtx._id,
            sentTo: sentTo,
        })
            .lean()
            .exec();
    }
    async getMessagesNegotiationType(negotiation) {
        await this.collection.createIndex({ sentTo: 1 });
        await this.collection.createIndex({ sentBy: 1 });
        const userCtx = this.context.user;
        const messages = await this.model
            .find({
            $or: [{ sentBy: userCtx._id }, { sentTo: userCtx._id }],
            negotiation: negotiation,
        })
            .exec();
        return messages;
    }
    async getMessagesForNegotiation({ negotiation, limit = 20, offset = 0, }) {
        await this.collection.createIndex({ sentTo: 1 });
        await this.collection.createIndex({ sentBy: 1 });
        const userCtx = this.context.user;
        const messages = await this.model
            .find({
            $or: [{ sentBy: userCtx._id }, { sentTo: userCtx._id }],
            negotiation: negotiation,
        })
            .sort({ _id: -1 })
            .skip(offset)
            .limit(limit)
            .exec();
        const pageCount = await this.model
            .find({
            $or: [{ sentBy: userCtx._id }, { sentTo: userCtx._id }],
            negotiation: negotiation,
        })
            .countDocuments()
            .exec();
        const messagesToRead = messages.filter((message) => message.sentTo.toString() === this.context.user._id.toString() &&
            !message.isViewed);
        if (messagesToRead) {
            for (const message of messagesToRead) {
                message.isViewed = true;
                try {
                    await message.save();
                }
                catch (e) {
                    logger_1.loggerError(e);
                }
            }
        }
        return { messages, pageCount };
    }
    async createMessage(message) {
        const errors = [];
        const createdMessage = new this.model({
            ...message,
            sentBy: this.context.user,
        });
        if (createdMessage.sentBy.toString() === createdMessage.sentTo.toString()) {
            errors.push({
                name: 'UserInputError',
                text: 'You cannot send messages to yourself',
            });
            return {
                response: null,
                errors,
            };
        }
        try {
            await createdMessage.save();
        }
        catch (e) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            errors.push({ name: 'General Error', text: e.message });
            return {
                response: null,
                errors,
            };
        }
        return {
            response: createdMessage,
            errors,
        };
    }
    async messageAdmin(recipients, message) {
        if (!recipients)
            return;
        await Promise.all(recipients.map(async (recipient) => {
            const createdMessage = new this.model({
                sentTo: recipient,
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                content: message,
                sentBy: config_1.ADMINISTRATOR_ID,
                negotiation: config_1.NEGOTIATION_ADM,
            });
            try {
                await createdMessage.save();
            }
            catch (e) {
                logger_1.loggerError(e);
            }
            // const message: IMessageDoc = new this.model({sentTo })
        }));
    }
    // async updateMessage(message: MessageInputUpdate): Promise<Response> {
    //   const errors: Errors[] = [];
    //   const updatedMessage = await this.model.findByIdAndUpdate(message._id, message, {
    //     new: true,
    //   });
    //   if (!updatedMessage) {
    //     errors.push({
    //       name: 'General error',
    //       text: 'Errors during the message update',
    //     });
    //     return {
    //       response: null,
    //       errors,
    //     };
    //   }
    //   return {
    //     response: updatedMessage,
    //     errors,
    //   };
    // }
    async deleteMessages(negotiation) {
        let error = null;
        try {
            await this.model.deleteMany({ negotiation });
        }
        catch (e) {
            error = {
                name: 'messages deletion error',
                text: e,
            };
        }
        return error;
    }
    async deleteMessage(messageId) {
        const errors = [];
        const deletedMessage = await this.model
            .findByIdAndDelete(messageId)
            .lean()
            .exec();
        if (!deletedMessage) {
            errors.push({
                name: 'General error',
                text: 'Errors during the message delete',
            });
            return {
                response: null,
                errors,
            };
        }
        return {
            response: deletedMessage,
            errors,
        };
    }
}
exports.default = Messages;
