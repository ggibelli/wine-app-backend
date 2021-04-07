"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ad_1 = require("../models/ad");
const message_1 = require("../models/message");
const negotiation_1 = require("../models/negotiation");
const review_1 = require("../models/review");
const user_1 = require("../models/user");
const vineyard_1 = require("../models/vineyard");
const wine_1 = require("../models/wine");
const ads_1 = __importDefault(require("./ads"));
const messages_1 = __importDefault(require("./messages"));
const negotiations_1 = __importDefault(require("./negotiations"));
const reviews_1 = __importDefault(require("./reviews"));
const users_1 = __importDefault(require("./users"));
const vineyards_1 = __importDefault(require("./vineyards"));
const wines_1 = __importDefault(require("./wines"));
exports.default = () => ({
    ads: new ads_1.default(ad_1.Ad),
    messages: new messages_1.default(message_1.Message),
    negotiations: new negotiations_1.default(negotiation_1.Negotiation),
    reviews: new reviews_1.default(review_1.Review),
    users: new users_1.default(user_1.User),
    vineyards: new vineyards_1.default(vineyard_1.Vineyard),
    wines: new wines_1.default(wine_1.Wine),
});
