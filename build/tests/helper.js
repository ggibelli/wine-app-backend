"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
//import { createTestClient } from 'apollo-server-testing';
//import { schema } from '../index';
const ads_1 = __importDefault(require("../data-sources/ads"));
const users_1 = __importDefault(require("../data-sources/users"));
const user_1 = require("../models/user");
const ad_1 = require("../models/ad");
const resolvers_1 = __importDefault(require("../resolvers"));
const ad_2 = require("../schema/ad");
const directives_1 = require("../schema/directives");
const message_1 = require("../schema/message");
const negotiation_1 = require("../schema/negotiation");
const review_1 = require("../schema/review");
const user_2 = require("../schema/user");
const vineyard_1 = require("../schema/vineyard");
const wine_1 = require("../schema/wine");
const enum_1 = require("../schema/enum");
const scalars_1 = require("../schema/scalars");
const createTestServer = (ctx) => {
    const ads = new ads_1.default(ad_1.Ad);
    const users = new users_1.default(user_1.User);
    const server = new apollo_server_express_1.ApolloServer({
        resolvers: resolvers_1.default,
        typeDefs: [
            ad_2.typeDefs,
            directives_1.typeDefs,
            message_1.typeDefs,
            negotiation_1.typeDefs,
            review_1.typeDefs,
            user_2.typeDefs,
            vineyard_1.typeDefs,
            wine_1.typeDefs,
            enum_1.typeDefs,
            scalars_1.typeDefs,
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
