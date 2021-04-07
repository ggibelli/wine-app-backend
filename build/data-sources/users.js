"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const apollo_datasource_mongodb_1 = require("apollo-datasource-mongodb");
const isemail_1 = __importDefault(require("isemail"));
const passwordValidator_1 = __importDefault(require("../utils/passwordValidator"));
const pivaValidator_1 = __importDefault(require("../utils/pivaValidator"));
const config_1 = require("../utils/config");
const mailServer_1 = require("../utils/mailServer");
const cron_1 = require("cron");
const logger_1 = require("../utils/logger");
class Users extends apollo_datasource_mongodb_1.MongoDataSource {
    async getUser(userId) {
        return this.findOneById(userId);
    }
    getUsers() {
        return this.model.find({}).lean().exec();
    }
    async createUser(user) {
        const errors = [];
        if (!isemail_1.default.validate(user.email)) {
            errors.push({
                name: 'UserInputError',
                text: 'The email provided is not valid',
            });
        }
        if (!passwordValidator_1.default.validate(user.password)) {
            errors.push({
                name: 'UserInputError',
                text: 'The password provided is not valid',
            });
        }
        if (!pivaValidator_1.default(user.pIva)) {
            errors.push({
                name: 'UserInputError',
                text: 'The PIVA provided is not valid',
            });
        }
        const newUser = new this.model({ ...user });
        if (errors.length > 0) {
            return {
                response: null,
                errors,
            };
        }
        try {
            await newUser.save();
        }
        catch (e) {
            errors.push({
                name: 'General Error',
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                text: e.message,
            });
            return {
                response: null,
                errors,
            };
        }
        const tokenForMail = this.context.createTokenMail(newUser);
        const token = this.context.createToken(newUser);
        const url = `http://localhost:${config_1.PORT}/verify?id=${tokenForMail}`;
        const mailBody = {
            subject: 'Signup successful',
            body: {
                intro: `Welcome to WineApp! We're very excited to have you on board. \n
          click on the <a href="${url}">link</a> to activate your account`,
            },
        };
        let countDeliveryTries = 0;
        const jobMail = new cron_1.CronJob('*/1 * * * *', () => {
            if (countDeliveryTries >= 2) {
                jobMail.stop();
                return;
            }
            mailServer_1.sendMail(mailBody, [newUser.email])
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
            response: {
                user: newUser,
                token,
            },
            errors,
        };
    }
    async updateUser(user) {
        const errors = [];
        if (user.email && !isemail_1.default.validate(user.email)) {
            errors.push({
                name: 'UserInputError',
                text: 'The email provided is not valid',
            });
        }
        if (user.password && !passwordValidator_1.default.validate(user.password)) {
            errors.push({
                name: 'UserInputError',
                text: 'The password provided is not valid',
            });
        }
        if (user.pIva && !pivaValidator_1.default(user.pIva)) {
            errors.push({
                name: 'UserInputError',
                text: 'The PIVA provided is not valid',
            });
        }
        const updatedUser = await this.model
            .findByIdAndUpdate(user._id, user, { new: true })
            .lean()
            .exec();
        if (!updatedUser) {
            errors.push({
                name: 'General error',
                text: 'Error during the update',
            });
            return {
                response: null,
                errors,
            };
        }
        return {
            response: updatedUser,
            errors,
        };
    }
    async deleteUser(id) {
        const errors = [];
        const deletedUser = await this.model.findByIdAndDelete(id).lean().exec();
        if (!deletedUser) {
            errors.push({
                name: 'General error',
                text: 'Error during the delete',
            });
            return {
                response: null,
                errors,
            };
        }
        return {
            response: deletedUser,
            errors,
        };
    }
    async saveAd(ad) {
        const errors = [];
        const user = await this.model.findById(this.context.user._id);
        const isSaved = 
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        user?.savedAds?.findIndex((adSaved) => adSaved._id.toString() === ad._id.toString()) !== -1;
        if (isSaved) {
            user?.savedAds?.pull({ _id: ad._id });
        }
        else {
            user?.savedAds?.addToSet(ad);
        }
        try {
            await user?.save();
        }
        catch (e) {
            errors.push({
                name: 'General error',
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                text: `text error: ${e}`,
            });
        }
        return {
            response: ad,
            errors,
        };
    }
    async login(email, password) {
        const errors = [];
        const user = await this.model.findOne({ email });
        if (!user) {
            errors.push({ name: 'UserInputError', text: 'User not found' });
            return {
                response: null,
                errors,
            };
        }
        const passValid = await user?.validatePassword(password);
        if (!passValid) {
            errors.push({ name: 'UserInputError', text: 'Wrong credentials' });
            return {
                response: null,
                errors,
            };
        }
        return {
            response: { user, token: this.context.createToken(user) },
            errors,
        };
    }
}
exports.default = Users;
