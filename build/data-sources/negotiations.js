"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_mongodb_1 = require("apollo-datasource-mongodb");
const cron_1 = require("cron");
const apollo_server_express_1 = require("apollo-server-express");
const mongoose_1 = require("mongoose");
const graphql_1 = require("../generated/graphql");
const mailServer_1 = require("../utils/mailServer");
const logger_1 = require("../utils/logger");
const ads_1 = require("./ads");
class Negotiations extends apollo_datasource_mongodb_1.MongoDataSource {
    async getNegotiation(id) {
        return this.findOneById(id);
    }
    async getNegotiationsForUserType() {
        const userCtx = this.context.user;
        return this.model
            .find({
            $or: [{ createdBy: userCtx._id }, { forUserAd: userCtx._id }],
        })
            .lean()
            .exec();
    }
    async getNegotiations({ limit = 100, offset = 0, orderBy = graphql_1.QueryOrderBy.CreatedAtDESC, isConcluded = false, }) {
        const userCtx = this.context.user;
        const LIMIT_MAX = 100;
        if (limit < 1 || offset < 0 || limit > LIMIT_MAX) {
            throw new apollo_server_express_1.UserInputError(`${limit} must be greater than 1 and less than 100 ${offset} must be positive `);
        }
        const sortQuery = ads_1.sortQueryHelper(orderBy);
        if (userCtx.isAdmin) {
            const pageCount = await this.model.countDocuments().exec();
            return {
                negotiations: await this.model
                    .find({})
                    .sort(sortQuery)
                    .skip(offset)
                    .limit(limit)
                    .lean()
                    .exec(),
                pageCount,
            };
        }
        const pageCount = await this.model
            .countDocuments({
            $or: [{ createdBy: userCtx._id }, { forUserAd: userCtx._id }],
            $and: [{ isConcluded }],
        })
            .exec();
        return {
            negotiations: await this.model
                .find({
                $or: [{ createdBy: userCtx._id }, { forUserAd: userCtx._id }],
                $and: [{ isConcluded }],
            })
                .lean()
                .sort(sortQuery)
                .skip(offset)
                .limit(limit)
                .exec(),
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
            ad,
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
        if (!userCtx.isVerified) {
            errors.push({
                name: 'AuthorizationError',
                text: 'You need to verify your account',
            });
            return {
                response: null,
                errors,
            };
        }
        const createdNegotiation = new this.model({
            _id: new mongoose_1.Types.ObjectId(),
            ...negotiation,
            createdBy: userCtx,
        });
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
            function safePush(n) {
                recipient.push(n.forUserAd.email);
            }
            if (countDeliveryTries >= 2) {
                jobMail.stop();
                return;
            }
            createdNegotiation
                .populate({ path: 'forUserAd', select: 'email' })
                .execPopulate()
                .then((n) => safePush(n))
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
        const updatedNegotiation = await this.model
            .findOneAndUpdate({
            $or: [{ createdBy: userCtx._id }, { forUserAd: userCtx._id }],
            $and: [{ _id: negotiation._id }],
        }, negotiation, {
            new: true,
        })
            .lean()
            .exec();
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
            .findOneAndDelete({
            $or: [{ createdBy: userCtx._id }, { forUserAd: userCtx._id }],
            $and: [{ _id: negotiationId }],
        })
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
