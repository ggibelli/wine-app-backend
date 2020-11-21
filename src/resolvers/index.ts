import { merge } from 'lodash';
import { resolver as userResolvers } from './user-resolver';
import { resolver as adResolvers } from './ad';
import { Resolvers } from '../generated/graphql';

const resolvers: Resolvers = merge(userResolvers, adResolvers);

export default resolvers;
