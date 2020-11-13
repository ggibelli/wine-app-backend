import { QueryResolvers } from '../generated/graphql';
import { User } from '../models/user';

interface Resolvers {
  Query: QueryResolvers;
}

export const resolver: Resolvers = {
  Query: {
    users: async () => {
      //
      return await User.find({});
    },

    user: async (_root, { id }) => {
      const user = await User.findById(id);
      //
      if (!user) return null;
      return user;
    },
  },
};
