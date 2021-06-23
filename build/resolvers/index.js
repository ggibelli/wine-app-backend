"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const user_1 = __importDefault(require("./user"));
const ad_1 = __importDefault(require("./ad"));
const message_1 = __importDefault(require("./message"));
const negotiation_1 = __importDefault(require("./negotiation"));
const wine_1 = __importDefault(require("./wine"));
const vineyard_1 = __importDefault(require("./vineyard"));
const review_1 = __importDefault(require("./review"));
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const resolvers = lodash_1.merge(user_1.default, ad_1.default, message_1.default, review_1.default, negotiation_1.default, wine_1.default, vineyard_1.default);
exports.default = resolvers;
