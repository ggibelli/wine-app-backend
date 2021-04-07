"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmationRouter = void 0;
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = require("../models/user");
const config_1 = require("../utils/config");
exports.confirmationRouter = express_1.Router();
exports.confirmationRouter.get('/verify', async (req, res) => {
    const token = req.query.id;
    if (token && typeof token === 'string') {
        try {
            const user = jsonwebtoken_1.default.verify(token, config_1.SECRET);
            await user_1.User.findByIdAndUpdate(user._id, { isVerified: true })
                .lean()
                .exec();
            return res.sendStatus(200);
        }
        catch (e) {
            return res.sendStatus(403);
        }
    }
    else {
        return res.sendStatus(403);
    }
});
