/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import express, { Request } from 'express';
import {
  ApolloServer,
  AuthenticationError,
  makeExecutableSchema,
} from 'apollo-server-express';
import mongoose from 'mongoose';
import http from 'http';
import path from 'path';
import { MONGODB_URI, PORT } from './utils/config';
import { loggerInfo, loggerError } from './utils/logger';
import resolvers from './resolvers';
import Ad from './schema/ad';
import Directives from './schema/directives';
import Message from './schema/message';
import Negotiation from './schema/negotiation';
import Review from './schema/review';
import UserSchema from './schema/user';
import Vineyard from './schema/vineyard';
import Wine from './schema/wine';
import Enum from './schema/enum';
import Errors from './schema/error';
import Scalars from './schema/scalars';
import dataSources from './data-sources';
import {
  AuthenticateDirective,
  AuthorizedDirective,
  FormatDateDirective,
} from './directives';
import { createToken, getUserFromToken, createTokenMail } from './utils/auth';
import confirmationRouter from './controllers/accountConfirmation';

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('autoIndex', false);

export const mongooseConnection = (): void => {
  mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      loggerInfo('connected to MongoDB');
    })
    .catch((error) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      loggerError('error connection to MongoDB: ', error.message);
    });
};

export const schema = makeExecutableSchema({
  typeDefs: [
    Ad,
    Directives,
    Message,
    Negotiation,
    Review,
    UserSchema,
    Wine,
    Vineyard,
    Enum,
    Errors,
    Scalars,
  ],
  resolvers,
  schemaDirectives: {
    date: FormatDateDirective,
    authenticated: AuthenticateDirective,
    authorized: AuthorizedDirective,
  },
  inheritResolversFromInterfaces: true,
});

function initializeSubscriptionDataSources(context: { dataSources: any }) {
  const conte = context;
  if (conte.dataSources) {
    for (const instance in conte.dataSources) {
      conte.dataSources[instance].initialize({ context, cache: undefined });
    }
  }
}

const server = new ApolloServer({
  schema,
  schemaDirectives: {
    date: FormatDateDirective,
    authenticated: AuthenticateDirective,
    authorized: AuthorizedDirective,
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context: async ({ req, connection }: { req: Request; connection: any }) => {
    if (connection) {
      const subscriptionContext = connection.context;
      initializeSubscriptionDataSources(subscriptionContext);
      return subscriptionContext;
    }
    const token = req.headers.authorization;
    const user = await getUserFromToken(token);
    return { user, createToken, createTokenMail };
  },
  subscriptions: {
    async onConnect(connParams: any) {
      const token = connParams.authToken;
      const user = await getUserFromToken(token);
      if (!user) throw new AuthenticationError('need to login');
      return { user, dataSources: dataSources() };
    },
  },
  dataSources,
  tracing: true,
});

export const app = express();
app.use(confirmationRouter);
app.use(express.static('public'));
app.get('*', (_req, res) => {
  res.sendFile(path.resolve('public', 'index.html'));
});
server.applyMiddleware({ app, path: '/graphql' });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

const start = () => {
  mongooseConnection();
  httpServer.listen(PORT, () => loggerInfo(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`,
  ));
};

if (process.env.NODE_ENV !== 'test') {
  start();
}
