import { createTestClient } from 'apollo-server-testing';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import resolvers from '../resolvers/';
import { typeDefs as Ad } from '../schema/ad';
import { typeDefs as Directives } from '../schema/directives';
import { typeDefs as MessageS } from '../schema/message';
import { typeDefs as NegotiationS } from '../schema/negotiation';
import { typeDefs as ReviewS } from '../schema/review';
import { typeDefs as UserSchema } from '../schema/user';
import { typeDefs as VineyardS } from '../schema/vineyard';
import { typeDefs as WineS } from '../schema/wine';
import { typeDefs as Enum } from '../schema/enum';
import { typeDefs as Scalars } from '../schema/scalars';
import { MONGODB_URI } from '../utils/config';
import {
  AuthenticateDirective,
  AuthorizedDirective,
  FormatDateDirective,
} from '../directives';

import dataSources from '../data-sources';
// import { Message } from '../models/message';
// import { Negotiation } from '../models/negotiation';
// import { Review } from '../models/review';
// import { Wine } from '../models/wine';
// import { Vineyard } from '../models/vineyard';

export const connectToDb = async () => {
  await mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((error) => console.error(error));
};

export const dropTestDb = async () => {
  if (process.env.NODE_ENV === 'test') {
    await mongoose.connection.db
      .dropDatabase()
      .catch((error) => console.error(error));
  }
};

export const closeDbConnection = async () => {
  await mongoose.connection.close().catch((error) => console.error(error));
};

const server = new ApolloServer({
  resolvers,
  typeDefs: [
    Ad,
    Directives,
    UserSchema,
    Enum,
    Scalars,
    MessageS,
    NegotiationS,
    ReviewS,
    WineS,
    VineyardS,
  ],
  context: ({ req, res }) => ({
    req,
    res,
  }),
  dataSources,
  schemaDirectives: {
    date: FormatDateDirective,
    authorized: AuthorizedDirective,
    authenticated: AuthenticateDirective,
  },
  //mockEntireSchema: true,
  //mocks: true,
});

export const testClient = createTestClient(server);
