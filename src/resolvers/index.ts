import { merge } from 'lodash';
import { resolver as userResolvers } from './user';
import { resolver as adResolvers } from './ad';
import { resolver as messageResolver } from './message';
import { resolver as negotiationResolver } from './negotiation';
import { resolver as wineResolvers } from './wine';
import { resolver as vineyardResolvers } from './vineyard';
import { resolver as reviewResolvers } from './review';
import { Resolvers } from '../generated/graphql';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const resolvers: Resolvers = merge(
  userResolvers,
  adResolvers,
  messageResolver,
  reviewResolvers,
  negotiationResolver,
  wineResolvers,
  vineyardResolvers
);

export default resolvers;
