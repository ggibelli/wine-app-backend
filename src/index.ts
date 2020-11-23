import express, { Request } from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
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
import { typeDefs as Scalars } from './schema/scalars';
import dataSources from './data-sources';
import schemaDirectives from './directives';

import { createToken, getUserFromToken } from './utils/auth';

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
    Scalars,
  ],
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
});
console.log(schemaDirectives);

const server = new ApolloServer({
  schema,
  schemaDirectives,
  context: ({ req, connection }: { req: Request; connection: any }) => {
    if (connection) {
      return { ...connection.context };
    }
    const token = req.headers.authorization;
    const user = getUserFromToken(token);
    return { user, createToken };
  },
  dataSources,
  tracing: true,
  mocks: true,
  mockEntireSchema: true,
});

const app = express();
server.applyMiddleware({ app });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

const start = () => {
  mongooseConnection();
  httpServer.listen(PORT, () =>
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  );
};

if (process.env.NODE_ENV !== 'test') {
  start();
}
