"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testClient = exports.closeDbConnection = exports.dropTestDb = exports.connectToDb = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
const apollo_server_integration_testing_1 = require("apollo-server-integration-testing");
const apollo_server_express_1 = require("apollo-server-express");
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../utils/config");
const auth_1 = require("../utils/auth");
const index_1 = require("../index");
const data_sources_1 = __importDefault(require("../data-sources"));
const connectToDb = async () => {
    await mongoose_1.default
        .connect(config_1.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
        .catch((error) => console.error(error));
};
exports.connectToDb = connectToDb;
const dropTestDb = async () => {
    if (process.env.NODE_ENV === 'test') {
        await mongoose_1.default.connection.db
            .dropDatabase()
            .catch((error) => console.error(error));
    }
};
exports.dropTestDb = dropTestDb;
const closeDbConnection = async () => {
    await mongoose_1.default.connection.close().catch((error) => console.error(error));
};
exports.closeDbConnection = closeDbConnection;
const apolloServer = new apollo_server_express_1.ApolloServer({
    schema: index_1.schema,
    context: async ({ req, connection }) => {
        if (connection) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return { ...connection.context };
        }
        const token = req.headers?.authorization;
        const user = await auth_1.getUserFromToken(token);
        return { user, createToken: auth_1.createToken, createTokenMail: auth_1.createTokenMail };
    },
    dataSources: data_sources_1.default,
});
exports.testClient = apollo_server_integration_testing_1.createTestClient({ apolloServer });
