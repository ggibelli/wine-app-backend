"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_mongodb_1 = require("apollo-datasource-mongodb");
const cron_1 = require("cron");
const apollo_server_express_1 = require("apollo-server-express");
const mongoose_1 = require("mongoose");
const types_1 = require("../types");
const mailServer_1 = require("../utils/mailServer");
const logger_1 = require("../utils/logger");
const ads_1 = require("./ads");
class Reviews extends apollo_datasource_mongodb_1.MongoDataSource {
    async getReview(id) {
        return this.findOneById(id);
    }
    async getReviewForUser() {
        const userCtx = this.context.user;
        return this.model
            .find({
            $or: [{ createdBy: userCtx._id }, { forUser: userCtx._id }],
        })
            .lean()
            .exec();
    }
    async getReviewForNegotiation(id) {
        return this.model
            .find({
            negotiation: id,
        })
            .lean()
            .exec();
    }
    async getReviews({ limit = 10, offset = 0, orderBy = types_1.QueryOrderBy.CreatedAtDESC, }) {
        const userCtx = this.context.user;
        const LIMIT_MAX = 100;
        if (limit < 1 || offset < 0 || limit > LIMIT_MAX) {
            throw new apollo_server_express_1.UserInputError(`${limit} must be greater than 1 and less than 100 ${offset} must be positive `);
        }
        const sortQuery = ads_1.sortQueryHelper(orderBy);
        if (userCtx.isAdmin) {
            const pageCount = await this.model.countDocuments().exec();
            return {
                reviews: await this.model
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
            $or: [{ createdBy: userCtx._id }, { forUser: userCtx._id }],
        })
            .exec();
        return {
            reviews: await this.model
                .find({
                $or: [{ createdBy: userCtx._id }, { forUser: userCtx._id }],
            })
                .sort(sortQuery)
                .skip(offset)
                .limit(limit)
                .lean()
                .exec(),
            pageCount,
        };
    }
    async createReview(review) {
        const userCtx = this.context.user;
        const errors = [];
        const createdReview = new this.model({
            _id: new mongoose_1.Types.ObjectId(),
            ...review,
            createdBy: userCtx,
        });
        if (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        createdReview.forUser.toString() === userCtx._id.toHexString()) {
            errors.push({
                name: 'General Error',
                text: 'You cannot review yourself',
            });
            return {
                response: null,
                errors,
            };
        }
        try {
            await createdReview.save();
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
            subject: 'New Review',
            body: {
                intro: `User ${userCtx.firstName} wrote a review. \n
          for your negotiation,click on the <a href="${createdReview._id}">link</a> to see it`,
            },
        };
        let countDeliveryTries = 0;
        const jobMail = new cron_1.CronJob('*/1 * * * *', () => {
            const recipient = [];
            function safePush(r) {
                recipient.push(r.forUser.email);
            }
            if (countDeliveryTries >= 2) {
                jobMail.stop();
                return;
            }
            createdReview
                .populate({ path: 'forUser', select: 'email' })
                .execPopulate()
                .then((r) => safePush(r))
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
            response: createdReview,
            errors,
        };
    }
    async updateReview(review) {
        const userCtx = this.context.user;
        const errors = [];
        const updatedReview = await this.model.findOneAndUpdate({ createdBy: userCtx._id.toHexString(), _id: review._id }, review, {
            new: true,
        });
        if (!updatedReview) {
            errors.push({
                name: 'General error',
                text: 'Errors during the review update, only creator can update review',
            });
            return {
                response: null,
                errors,
            };
        }
        return {
            response: updatedReview,
            errors,
        };
    }
    async deleteReview(reviewId) {
        const userCtx = this.context.user;
        const errors = [];
        const deletedReview = await this.model
            .findOneAndDelete({ _id: reviewId, createdBy: userCtx._id.toHexString() })
            .lean()
            .exec();
        if (!deletedReview) {
            errors.push({
                name: 'General error',
                text: 'Errors during the review delete, only creator can delete review',
            });
            return {
                response: null,
                errors,
            };
        }
        return {
            response: deletedReview,
            errors,
        };
    }
}
exports.default = Reviews;
