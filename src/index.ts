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
import { MONGODB_URI, PORT } from './utils/config';
import { loggerInfo, loggerError } from './utils/logger';
import resolvers from './resolvers/';
import { typeDefs as Ad } from './schema/ad';
import { typeDefs as Directives } from './schema/directives';
import { typeDefs as Message } from './schema/message';
import { typeDefs as Negotiation } from './schema/negotiation';
import { typeDefs as Review } from './schema/review';
import { typeDefs as UserSchema } from './schema/user';
import { typeDefs as Vineyard } from './schema/vineyard';
import { typeDefs as Wine } from './schema/wine';
import { typeDefs as Enum } from './schema/enum';
import { typeDefs as Errors } from './schema/error';
import { typeDefs as Scalars } from './schema/scalars';
import dataSources from './data-sources';
import {
  AuthenticateDirective,
  AuthorizedDirective,
  FormatDateDirective,
} from './directives';

import { createToken, getUserFromToken, createTokenMail } from './utils/auth';
import { confirmationRouter } from './controllers/accountConfirmation';
import cors from 'cors';

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const mongooseConnection = () => {
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
  const dataSources = context.dataSources;
  if (dataSources) {
    for (const instance in dataSources) {
      dataSources[instance].initialize({ context, cache: undefined });
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
      const token = connParams.authorization;
      const user = await getUserFromToken(token);
      if (!user) throw new AuthenticationError('need to login');
      return { user, dataSources: dataSources() };
    },
  },
  dataSources,
  tracing: true,
});

export const app = express();
server.applyMiddleware({ app });
app.use(confirmationRouter);
app.use(cors);
const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

const start = () => {
  mongooseConnection();
  httpServer.listen(PORT, () =>
    loggerInfo(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  );
};

if (process.env.NODE_ENV !== 'test') {
  start();
}
