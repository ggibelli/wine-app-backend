import { ApolloServer } from 'apollo-server-express';
//import { createTestClient } from 'apollo-server-testing';
//import { schema } from '../index';
import Ads from '../data-sources/ads';
import Users from '../data-sources/users';
import { User } from '../models/user';
import { Ad as AdModel } from '../models/ad';
import resolvers from '../resolvers';
import { typeDefs as Ad } from '../schema/ad';
import { typeDefs as Directives } from '../schema/directives';
import { typeDefs as Message } from '../schema/message';
import { typeDefs as Negotiation } from '../schema/negotiation';
import { typeDefs as Review } from '../schema/review';
import { typeDefs as UserSchema } from '../schema/user';
import { typeDefs as Vineyard } from '../schema/vineyard';
import { typeDefs as Wine } from '../schema/wine';
import { typeDefs as Enum } from '../schema/enum';
import { typeDefs as Scalars } from '../schema/scalars';

const createTestServer = (ctx: any) => {
  const ads = new Ads(AdModel);
  const users = new Users(User);
  const server = new ApolloServer({
    resolvers,
    typeDefs: [
      Ad,
      Directives,
      Message,
      Negotiation,
      Review,
      UserSchema,
      Vineyard,
      Wine,
      Enum,
      Scalars,
    ],
    dataSources: () => ({ ads, users }),
    context: () => ctx,
    mocks: true,
    mockEntireSchema: false,
  });

  return { server, ads, users };
};

export default createTestServer;
