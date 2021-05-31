"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortQueryHelper = void 0;
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
const apollo_datasource_mongodb_1 = require("apollo-datasource-mongodb");
const types_1 = require("../types");
const helpersTypeScript_1 = require("../utils/helpersTypeScript");
const apollo_server_express_1 = require("apollo-server-express");
const mailServer_1 = require("../utils/mailServer");
const cron_1 = require("cron");
const logger_1 = require("../utils/logger");
const sortQueryHelper = (orderBy) => {
    let sortQuery;
    switch (orderBy) {
        case types_1.QueryOrderBy.createdAt_ASC:
            sortQuery = { _id: 1 };
            break;
        case types_1.QueryOrderBy.createdAt_DESC:
            sortQuery = { _id: -1 };
            break;
        case types_1.QueryOrderBy.price_ASC:
            sortQuery = { priceFrom: 1 };
            break;
        case types_1.QueryOrderBy.price_DESC:
            sortQuery = { priceFrom: -1 };
            break;
        default:
            helpersTypeScript_1.assertNever(orderBy);
    }
    return sortQuery;
};
exports.sortQueryHelper = sortQueryHelper;
const parseGrapeAd = (params, errors) => {
    if (!params.vineyardName) {
        errors.push({
            name: 'UserInputError',
            text: 'The vineyard name is mandatory',
        });
        // throw new UserInputError('All the parameters are mandatory', {
        //   invalidArgs: params,
        // });
    }
    if (!params.kgFrom) {
        errors.push({
            name: 'UserInputError',
            text: 'The kg from is mandatory',
        });
        // throw new UserInputError('All the parameters are mandatory', {
        //   invalidArgs: params,
        // });
    }
    if (!params.kgTo) {
        errors.push({
            name: 'UserInputError',
            text: 'The kg to is mandatory',
        });
        // throw new UserInputError('All the parameters are mandatory', {
        //   invalidArgs: params,
        // });
    }
    return {
        vineyardName: params.vineyardName,
        kgFrom: params.kgFrom,
        kgTo: params.kgTo,
    };
};
const parseWineAd = (params, errors) => {
    if (!params.wineName) {
        errors.push({
            name: 'UserInputError',
            text: 'The wine name is mandatory',
        });
        // throw new UserInputError('All the parameters are mandatory', {
        //   invalidArgs: params,
        // });
    }
    if (!params.litersFrom) {
        errors.push({
            name: 'UserInputError',
            text: 'The liters from is mandatory',
        });
        // throw new UserInputError('All the parameters are mandatory', {
        //   invalidArgs: params,
        // });
    }
    if (!params.litersTo) {
        errors.push({
            name: 'UserInputError',
            text: 'The liters to is mandatory',
        });
        // throw new UserInputError('All the parameters are mandatory', {
        //   invalidArgs: params,
        // });
    }
    return {
        wineName: params.wineName,
        litersFrom: params.litersFrom,
        litersTo: params.litersTo,
    };
};
class Ads extends apollo_datasource_mongodb_1.MongoDataSource {
    async getAd(adId) {
        //const user = this.context.user;
        const ad = await this.findOneById(adId);
        // if (user) {
        //   ad?.viewedBy?.addToSet(user._id);
        //   await ad?.save();
        // }
        //ad?.populate({ path: 'negotiations', select: 'createdBy' });
        return ad;
    }
    async getAdsUserType(user) {
        return this.model.find({ postedBy: user }).lean().exec();
    }
    async getAdsByUser({ user, limit = 10, offset = 0, orderBy = types_1.QueryOrderBy.createdAt_DESC, isActive, }) {
        const LIMIT_MAX = 100;
        if (limit < 1 || offset < 0 || limit > LIMIT_MAX) {
            throw new apollo_server_express_1.UserInputError(`${limit} must be greater than 1 and less than 100 ${offset} must be positive `);
        }
        const sortQuery = exports.sortQueryHelper(orderBy);
        const pageCount = await this.model
            .countDocuments({
            postedBy: user,
        })
            .exec();
        if (isActive === true) {
            const pageCount = await this.model
                .countDocuments({
                postedBy: user,
                isActive: true,
            })
                .exec();
            return {
                ads: (await this.model
                    .find({ postedBy: user, isActive: true })
                    .skip(offset)
                    .limit(limit)
                    .sort(sortQuery)
                    .lean()
                    .exec()),
                pageCount,
            };
        }
        return {
            ads: (await this.model
                .find({ postedBy: user })
                .skip(offset)
                .limit(limit)
                .sort(sortQuery)
                .lean()
                .exec()),
            pageCount,
        };
    }
    // un metodo solo con tipo prodotto e nome vino o nome vigna
    async getAds({ limit = 10, offset = 0, orderBy = types_1.QueryOrderBy.createdAt_DESC, vineyardName, wineName, typeAd, typeProduct, }) {
        const LIMIT_MAX = 100;
        if (limit < 1 || offset < 0 || limit > LIMIT_MAX) {
            throw new apollo_server_express_1.UserInputError(`${limit} must be greater than 1 and less than 100 ${offset} must be positive `);
        }
        const sortQuery = exports.sortQueryHelper(orderBy);
        if (vineyardName) {
            const pageCount = await this.model
                .countDocuments({
                typeAd: typeAd,
                vineyardName: vineyardName,
                isActive: true,
            })
                .exec();
            return {
                pageCount,
                ads: (await this.model
                    .find({
                    typeAd: typeAd,
                    vineyardName: vineyardName,
                    isActive: true,
                })
                    .skip(offset)
                    .limit(limit)
                    .sort(sortQuery)
                    .lean()
                    .exec()),
            };
        }
        else if (wineName) {
            const pageCount = await this.model
                .countDocuments({
                typeAd: typeAd,
                wineName: wineName,
                isActive: true,
            })
                .exec();
            return {
                pageCount,
                ads: (await this.model
                    .find({
                    typeAd: typeAd,
                    wineName: wineName,
                    isActive: true,
                })
                    .skip(offset)
                    .limit(limit)
                    .sort(sortQuery)
                    .lean()
                    .exec()),
            };
        }
        const pageCount = await this.model
            .countDocuments({
            typeAd: typeAd,
            typeProduct: typeProduct,
            isActive: true,
        })
            .exec();
        return {
            pageCount,
            ads: (await this.model
                .find({
                typeAd: typeAd,
                typeProduct: typeProduct,
                isActive: true,
            })
                .skip(offset)
                .limit(limit)
                .sort(sortQuery)
                .lean()
                .exec()),
        };
    }
    async createAd(ad) {
        const errors = [];
        // eslint-disable-next-line @typescript-eslint/await-thenable
        const user = this.context.user;
        if (!user.isVerified) {
            errors.push({
                name: 'AuthorizationError',
                text: 'You need to verify your account',
            });
            return {
                response: null,
                errors,
            };
        }
        const { _id } = this.context.user;
        const { typeAd, typeProduct, content, 
        // address,
        harvest, abv, priceFrom, priceTo, needsFollowUp, ...restParams } = ad;
        let newAd = {
            typeAd: typeAd,
            typeProduct: typeProduct,
            content: content,
            // address: address,
            harvest: harvest,
            abv: abv,
            priceFrom: priceFrom,
            priceTo: priceTo,
            needsFollowUp: needsFollowUp,
        };
        switch (newAd.typeProduct) {
            case types_1.TypeProduct.ADGRAPE:
                newAd = {
                    ...newAd,
                    ...parseGrapeAd(restParams, errors),
                };
                break;
            case types_1.TypeProduct.ADWINE:
                newAd = {
                    ...newAd,
                    ...parseWineAd(restParams, errors),
                };
                break;
            default:
                helpersTypeScript_1.assertNever(newAd.typeProduct);
        }
        if (errors.length !== 0) {
            return {
                response: null,
                errors,
            };
        }
        const createdAd = new this.model({ ...newAd, postedBy: _id });
        // If the Ad created was wine I look who wants a follow up about that wine and push the user id and mail into the array
        try {
            await createdAd.save();
        }
        catch (e) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            errors.push({ name: 'General Error', text: e.message });
            return {
                response: null,
                errors,
            };
            //throw new UserInputError(e.message);
        }
        let countDeliveryTries = 0;
        const followUpUsersToNotify = [];
        const SellOrBuy = createdAd.typeAd === types_1.TypeAd.SELL ? types_1.TypeAd.BUY : types_1.TypeAd.SELL;
        await this.collection.createIndex({ needsFollowUp: 1 });
        const adsToFollow = await this.model
            .find({
            $or: [
                {
                    wineName: createdAd.wineName,
                    vineyardName: createdAd.vineyardName,
                },
            ],
            $and: [{ needsFollowUp: true, typeAd: SellOrBuy, isActive: true }],
        })
            .populate('postedBy', { email: 1 })
            .lean()
            .exec();
        adsToFollow.map((ad) => followUpUsersToNotify.push({
            userId: ad.postedBy._id,
            userMail: ad.postedBy.email,
            adId: ad._id,
        }));
        const mailBody = {
            subject: 'New Ad',
            body: {
                intro: `Looks like there is a new ad that might interest you, here the link ${createdAd._id}`,
            },
        };
        const recipients = followUpUsersToNotify
            .filter((userFollowUp) => userFollowUp.userMail !== user.email)
            .map((user) => user.userMail);
        const uniqueRecipients = [...new Set(recipients)];
        const uniqueUsersToNotifiy = [
            ...new Set(followUpUsersToNotify
                .map((user) => user.userId.toString())
                .filter((u) => u !== user._id.toString())),
        ];
        const jobMail = new cron_1.CronJob('*/3 * * * *', () => {
            if (countDeliveryTries >= 2) {
                jobMail.stop();
                return;
            }
            mailServer_1.sendMail(mailBody, uniqueRecipients)
                .then(() => {
                jobMail.stop();
            })
                .catch((error) => {
                logger_1.loggerError(error);
                countDeliveryTries += 1;
            });
        });
        if (recipients.length > 0) {
            jobMail.start();
        }
        return {
            usersToNotify: uniqueUsersToNotifiy,
            response: createdAd,
            errors,
        };
    }
    async updateAd(ad) {
        const errors = [];
        const user = this.context.user;
        const updatedAd = await this.model
            .findOneAndUpdate({ _id: ad._id, postedBy: user._id }, ad, {
            new: true,
        })
            .populate('negotiations', { createdBy: 1 })
            .lean()
            .exec();
        if (!updatedAd) {
            errors.push({
                name: 'General error',
                text: 'Error during the update, only ad owner can update it',
            });
            return {
                response: null,
                errors,
            };
        }
        return {
            response: updatedAd,
            errors,
        };
    }
    async deleteAd(id) {
        const errors = [];
        const user = this.context.user;
        const removedAd = await this.model
            .findOneAndDelete({
            _id: id,
            postedBy: user._id,
        })
            .populate('negotiations', { createdBy: 1 })
            .lean()
            .exec();
        if (!removedAd) {
            errors.push({
                name: 'General error',
                text: 'Error during the delete, only ad owner can delete it',
            });
            return {
                response: null,
                errors,
            };
        }
        return {
            response: removedAd,
            errors,
        };
    }
}
exports.default = Ads;
