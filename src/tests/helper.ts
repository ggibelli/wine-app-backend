import { ApolloServer } from 'apollo-server-express';
// import { createTestClient } from 'apollo-server-testing';
// import { schema } from '../index';
import Ads from '../data-sources/ads';
import Users from '../data-sources/users';
import { User } from '../models/user';
import { Ad as AdModel } from '../models/ad';
import resolvers from '../resolvers';
import Ad from '../schema/ad';
import Directives from '../schema/directives';
import Message from '../schema/message';
import Negotiation from '../schema/negotiation';
import Review from '../schema/review';
import UserSchema from '../schema/user';
import Vineyard from '../schema/vineyard';
import Wine from '../schema/wine';
import Enum from '../schema/enum';
import Scalars from '../schema/scalars';

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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    context: () => ctx,
    mocks: true,
    mockEntireSchema: false,
  });

  return { server, ads, users };
};

export default createTestServer;
