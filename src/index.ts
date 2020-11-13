import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import mongoose from 'mongoose';
import http from 'http';
import { MONGODB_URI, SECRET, PORT } from './utils/config';
import { loggerInfo, loggerError } from './utils/logger';
import resolvers from './resolvers/';
import jwt from 'jsonwebtoken';
import { User } from './models/user';
import { typeDefs as Ad } from './schema/ad';
import { typeDefs as Message } from './schema/message';
import { typeDefs as Mutations } from './schema/mutations';
import { typeDefs as Negotiation } from './schema/negotiation';
import { typeDefs as Review } from './schema/review';
import { typeDefs as UserSchema } from './schema/user';
import { typeDefs as Vineyard } from './schema/vineyard';
import { typeDefs as Wine } from './schema/wine';
import { typeDefs as Enum } from './schema/enum';
import { typeDefs as Scalars } from './schema/scalars';
import dataSources from './data-sources';

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

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

type Req = { req: http.IncomingMessage };

const schema = makeExecutableSchema({
  typeDefs: [
    Ad,
    Message,
    Mutations,
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

interface DecodedToken {
  username: string;
  id: string;
}

const server = new ApolloServer({
  schema,
  context: async ({ req }: Req) => {
    const auth = req ? req.headers.authorization : null;
    if (auth && auth.toLowerCase().startsWith('bearer ')) {
      const decodedToken = jwt.verify(
        auth.substring(7),
        SECRET
      ) as DecodedToken;

      const currentUser = await User.findById(decodedToken.id);

      return { currentUser };
    }
    return null;
  },
  dataSources,
  tracing: true,
});

const app = express();
server.applyMiddleware({ app });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
);
