"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
// import { createTestClient } from 'apollo-server-testing';
// import { schema } from '../index';
const ads_1 = __importDefault(require("../data-sources/ads"));
const users_1 = __importDefault(require("../data-sources/users"));
const user_1 = require("../models/user");
const ad_1 = require("../models/ad");
const resolvers_1 = __importDefault(require("../resolvers"));
const ad_2 = __importDefault(require("../schema/ad"));
const directives_1 = __importDefault(require("../schema/directives"));
const message_1 = __importDefault(require("../schema/message"));
const negotiation_1 = __importDefault(require("../schema/negotiation"));
const review_1 = __importDefault(require("../schema/review"));
const user_2 = __importDefault(require("../schema/user"));
const vineyard_1 = __importDefault(require("../schema/vineyard"));
const wine_1 = __importDefault(require("../schema/wine"));
const enum_1 = __importDefault(require("../schema/enum"));
const scalars_1 = __importDefault(require("../schema/scalars"));
const createTestServer = (ctx) => {
    const ads = new ads_1.default(ad_1.Ad);
    const users = new users_1.default(user_1.User);
    const server = new apollo_server_express_1.ApolloServer({
        resolvers: resolvers_1.default,
        typeDefs: [
            ad_2.default,
            directives_1.default,
            message_1.default,
            negotiation_1.default,
            review_1.default,
            user_2.default,
            vineyard_1.default,
            wine_1.default,
            enum_1.default,
            scalars_1.default,
        ],
        dataSources: () => ({ ads, users }),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        context: () => ctx,
        mocks: true,
        mockEntireSchema: false,
    });
    return { server, ads, users };
};
exports.default = createTestServer;
