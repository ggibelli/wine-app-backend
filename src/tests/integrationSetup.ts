/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createTestClient } from 'apollo-server-integration-testing';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import { MONGODB_URI } from '../utils/config';
import { createToken, getUserFromToken, createTokenMail } from '../utils/auth';
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

interface HeadersExt extends Headers {
  authorization: string;
}

interface Req extends Request {
  headers: HeadersExt;
}

const apolloServer = new ApolloServer({
  schema,
  context: async ({ req, connection }: { req: Req; connection: any }) => {
    if (connection) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return { ...connection.context };
    }

    const token = req.headers?.authorization;
    const user = await getUserFromToken(token);
    return { user, createToken, createTokenMail };
  },
  dataSources,
});

export const testClient = createTestClient({ apolloServer });
