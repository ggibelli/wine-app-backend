"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserFromToken = exports.createTokenMail = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
const user_1 = require("../models/user");
const createToken = ({ _id }) => jsonwebtoken_1.default.sign({ _id }, config_1.SECRET);
exports.createToken = createToken;
const createTokenMail = ({ _id }) => jsonwebtoken_1.default.sign({ _id }, config_1.SECRET, { expiresIn: '1d' });
exports.createTokenMail = createTokenMail;
const getUserFromToken = async (token) => {
    if (!token) {
        return null;
    }
    try {
        const user = jsonwebtoken_1.default.verify(token, config_1.SECRET);
        return user_1.User.findById(user._id).lean().exec();
    }
    catch (e) {
        return null;
    }
};
exports.getUserFromToken = getUserFromToken;
