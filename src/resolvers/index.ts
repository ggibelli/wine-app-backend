import { merge } from 'lodash';
import userResolvers from './user';
import adResolvers from './ad';
import messageResolver from './message';
import negotiationResolver from './negotiation';
import wineResolvers from './wine';
import vineyardResolvers from './vineyard';
import reviewResolvers from './review';
import { Resolvers } from '../generated/graphql';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const resolvers: Resolvers = merge(
  userResolvers,
  adResolvers,
  messageResolver,
  reviewResolvers,
  negotiationResolver,
  wineResolvers,
  vineyardResolvers,
);

export default resolvers;
