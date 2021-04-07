"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const user_1 = require("./user");
const ad_1 = require("./ad");
const message_1 = require("./message");
const negotiation_1 = require("./negotiation");
const wine_1 = require("./wine");
const vineyard_1 = require("./vineyard");
const review_1 = require("./review");
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const resolvers = lodash_1.merge(user_1.resolver, ad_1.resolver, message_1.resolver, review_1.resolver, negotiation_1.resolver, wine_1.resolver, vineyard_1.resolver);
exports.default = resolvers;
