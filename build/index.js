"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.schema = exports.mongooseConnection = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const mongoose_1 = __importDefault(require("mongoose"));
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
const config_1 = require("./utils/config");
const logger_1 = require("./utils/logger");
const resolvers_1 = __importDefault(require("./resolvers"));
const ad_1 = __importDefault(require("./schema/ad"));
const directives_1 = __importDefault(require("./schema/directives"));
const message_1 = __importDefault(require("./schema/message"));
const negotiation_1 = __importDefault(require("./schema/negotiation"));
const review_1 = __importDefault(require("./schema/review"));
const user_1 = __importDefault(require("./schema/user"));
const vineyard_1 = __importDefault(require("./schema/vineyard"));
const wine_1 = __importDefault(require("./schema/wine"));
const enum_1 = __importDefault(require("./schema/enum"));
const error_1 = __importDefault(require("./schema/error"));
const scalars_1 = __importDefault(require("./schema/scalars"));
const data_sources_1 = __importDefault(require("./data-sources"));
const directives_2 = require("./directives");
const auth_1 = require("./utils/auth");
const accountConfirmation_1 = __importDefault(require("./controllers/accountConfirmation"));
mongoose_1.default.set('useFindAndModify', false);
mongoose_1.default.set('useCreateIndex', true);
mongoose_1.default.set('autoIndex', false);
const mongooseConnection = () => {
    mongoose_1.default
        .connect(config_1.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
        logger_1.loggerInfo('connected to MongoDB');
    })
        .catch((error) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        logger_1.loggerError('error connection to MongoDB: ', error.message);
    });
};
exports.mongooseConnection = mongooseConnection;
exports.schema = apollo_server_express_1.makeExecutableSchema({
    typeDefs: [
        ad_1.default,
        directives_1.default,
        message_1.default,
        negotiation_1.default,
        review_1.default,
        user_1.default,
        wine_1.default,
        vineyard_1.default,
        enum_1.default,
        error_1.default,
        scalars_1.default,
    ],
    resolvers: resolvers_1.default,
    schemaDirectives: {
        date: directives_2.FormatDateDirective,
        authenticated: directives_2.AuthenticateDirective,
        authorized: directives_2.AuthorizedDirective,
    },
    inheritResolversFromInterfaces: true,
});
function initializeSubscriptionDataSources(context) {
    const conte = context;
    if (conte.dataSources) {
        for (const instance in conte.dataSources) {
            conte.dataSources[instance].initialize({ context, cache: undefined });
        }
    }
}
const server = new apollo_server_express_1.ApolloServer({
    schema: exports.schema,
    schemaDirectives: {
        date: directives_2.FormatDateDirective,
        authenticated: directives_2.AuthenticateDirective,
        authorized: directives_2.AuthorizedDirective,
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    context: async ({ req, connection }) => {
        if (connection) {
            const subscriptionContext = connection.context;
            initializeSubscriptionDataSources(subscriptionContext);
            return subscriptionContext;
        }
        const token = req.headers.authorization;
        const user = await auth_1.getUserFromToken(token);
        return { user, createToken: auth_1.createToken, createTokenMail: auth_1.createTokenMail };
    },
    subscriptions: {
        async onConnect(connParams) {
            const token = connParams.authToken;
            const user = await auth_1.getUserFromToken(token);
            if (!user)
                throw new apollo_server_express_1.AuthenticationError('need to login');
            return { user, dataSources: data_sources_1.default() };
        },
    },
    dataSources: data_sources_1.default,
    tracing: true,
});
exports.app = express_1.default();
exports.app.use(accountConfirmation_1.default);
exports.app.use(express_1.default.static('public'));
exports.app.get('*', (_req, res) => {
    res.sendFile(path_1.default.resolve('public', 'index.html'));
});
server.applyMiddleware({ app: exports.app, path: '/graphql' });
const httpServer = http_1.default.createServer(exports.app);
server.installSubscriptionHandlers(httpServer);
const start = () => {
    exports.mongooseConnection();
    httpServer.listen(config_1.PORT, () => logger_1.loggerInfo(`🚀 Server ready at http://localhost:${config_1.PORT}${server.graphqlPath}`));
};
if (process.env.NODE_ENV !== 'test') {
    start();
}
