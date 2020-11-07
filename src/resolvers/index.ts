import { merge } from 'lodash';
//import { resolver as forecastResolvers } from './forecast-resolver';
import { resolver as userResolvers } from './user-resolver';
import { Resolvers } from '../generated/graphql';

const resolvers: Resolvers = merge(userResolvers);

export default resolvers;
