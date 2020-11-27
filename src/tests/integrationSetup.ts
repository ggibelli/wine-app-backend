import { createTestClient } from 'apollo-server-integration-testing';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import { MONGODB_URI } from '../utils/config';
import { createToken, getUserFromToken } from '../utils/auth';
import { schema } from '../index';

import dataSources from '../data-sources';

export const connectToDb = async () => {
  await mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
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

const apolloServer = new ApolloServer({
  schema,
  context: async ({ req, connection }: { req: Request; connection: any }) => {
    if (connection) {
      return { ...connection.context };
    }

    const token = req.headers?.authorization;
    const user = await getUserFromToken(token);
    return { user, createToken };
  },
  dataSources,
});

export const testClient = createTestClient({ apolloServer });
