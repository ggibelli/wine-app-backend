"use strict";
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_mongodb_1 = require("apollo-datasource-mongodb");
const types_1 = require("../types");
const mailServer_1 = require("../utils/mailServer");
const cron_1 = require("cron");
const logger_1 = require("../utils/logger");
const apollo_server_express_1 = require("apollo-server-express");
const ads_1 = require("./ads");
class Negotiations extends apollo_datasource_mongodb_1.MongoDataSource {
    async getNegotiation(id) {
        return this.findOneById(id);
    }
    async getNegotiationsForUserType() {
        await this.collection.createIndex({ createdBy: 1 });
        await this.collection.createIndex({ forUserAd: 1 });
        const userCtx = this.context.user;
        return this.model
            .find({
            $or: [{ createdBy: userCtx._id }, { forUserAd: userCtx._id }],
        })
            .lean()
            .exec();
    }
    async getNegotiations({ limit = 100, offset = 0, orderBy = types_1.QueryOrderBy.createdAt_DESC, isConcluded = false, }) {
        const userCtx = this.context.user;
        const LIMIT_MAX = 100;
        if (limit < 1 || offset < 0 || limit > LIMIT_MAX) {
            throw new apollo_server_express_1.UserInputError(`${limit} must be greater than 1 and less than 100 ${offset} must be positive `);
        }
        const sortQuery = ads_1.sortQueryHelper(orderBy);
        if (userCtx.isAdmin) {
            const pageCount = await this.model.countDocuments().exec();
            return {
                negotiations: (await this.model
                    .find({})
                    .sort(sortQuery)
                    .skip(offset)
                    .limit(limit)
                    .lean()
                    .exec()),
                pageCount,
            };
        }
        await this.collection.createIndex({ createdBy: 1 });
        await this.collection.createIndex({ forUserAd: 1 });
        const pageCount = await this.model
            .countDocuments({
            $or: [{ createdBy: userCtx._id }, { forUserAd: userCtx._id }],
            $and: [{ isConcluded }],
        })
            .exec();
        return {
            negotiations: (await this.model
                .find({
                $or: [{ createdBy: userCtx._id }, { forUserAd: userCtx._id }],
                $and: [{ isConcluded }],
            })
                .lean()
                .sort(sortQuery)
                .skip(offset)
                .limit(limit)
                .exec()),
            pageCount,
        };
    }
    async getNegotiationsForUser(forUser) {
        const userCtx = this.context.user;
        return this.model
            .find({
            createdBy: userCtx._id,
            forUserAd: forUser,
        })
            .lean()
            .exec();
    }
    async getNegotiationsForAd(ad) {
        return this.model
            .find({
            ad: ad,
        })
            .lean()
            .exec();
    }
    async negotiationsActive(id) {
        return this.model.countDocuments({ ad: id, isConcluded: false });
    }
    async createNegotiation(negotiation) {
        const userCtx = this.context.user;
        const errors = [];
        const createdNegotiation = new this.model({
            ...negotiation,
            createdBy: userCtx,
        });
        const populatedNegotiation = await createdNegotiation
            .populate({ path: 'forUserAd', select: 'isVerified' })
            .execPopulate();
        if (!userCtx.isVerified || !populatedNegotiation.forUserAd.isVerified) {
            errors.push({
                name: 'AuthorizationError',
                text: 'You need to verify your account',
            });
            return {
                response: null,
                errors,
            };
        }
        try {
            await createdNegotiation.save();
        }
        catch (e) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            errors.push({ name: 'General Error', text: e.message });
            return {
                response: null,
                errors,
            };
        }
        const mailBody = {
            subject: 'New Negotiation',
            body: {
                intro: `User ${userCtx.firstName} opened a negotiation. \n
          for your ad,click on the <a href="${createdNegotiation.ad}">link</a> to see it`,
            },
        };
        let countDeliveryTries = 0;
        const jobMail = new cron_1.CronJob('*/1 * * * *', () => {
            const recipient = [];
            if (countDeliveryTries >= 2) {
                jobMail.stop();
                return;
            }
            createdNegotiation
                .populate({ path: 'forUserAd', select: 'email' })
                .execPopulate()
                .then((negotiation) => {
                recipient.push(negotiation.forUserAd.email);
            })
                .catch((e) => {
                logger_1.loggerError(e);
            });
            mailServer_1.sendMail(mailBody, recipient)
                .then(() => {
                jobMail.stop();
            })
                .catch((e) => {
                logger_1.loggerError(e);
                countDeliveryTries += 1;
            });
        });
        jobMail.start();
        return {
            response: createdNegotiation,
            errors,
        };
    }
    async updateNegotiation(negotiation) {
        const userCtx = this.context.user;
        const errors = [];
        if (negotiation.isConcluded) {
            negotiation.dateConcluded = new Date(Date.now());
        }
        const updatedNegotiation = await this.model.findOneAndUpdate({
            $or: [{ createdBy: userCtx }, { forUserAd: userCtx }],
            $and: [{ _id: negotiation._id }],
        }, negotiation, {
            new: true,
        });
        if (!updatedNegotiation) {
            errors.push({
                name: 'General error',
                text: 'Errors during the negotiation update, only creator can update negotiation',
            });
            return {
                response: null,
                errors,
            };
        }
        return {
            response: updatedNegotiation,
            errors,
        };
    }
    async deleteNegotiation(negotiationId) {
        const userCtx = this.context.user;
        const errors = [];
        const deletedNegotiation = await this.model
            .findOneAndDelete({ _id: negotiationId, createdBy: userCtx })
            .lean()
            .exec();
        if (!deletedNegotiation) {
            errors.push({
                name: 'General error',
                text: 'Errors during the negotiation delete, only creator can delete negotiation',
            });
            return {
                response: null,
                errors,
            };
        }
        return {
            response: deletedNegotiation,
            errors,
        };
    }
    async deleteMany(adId) {
        try {
            await this.model.deleteMany({ ad: adId });
        }
        catch (e) {
            throw new Error('Error during delete many');
        }
    }
}
exports.default = Negotiations;