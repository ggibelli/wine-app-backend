import { QueryResolvers, User } from '../generated/graphql';
import { User as UserModel } from '../models/user';

interface Resolvers {
  Query: QueryResolvers;
}

export const resolver: Resolvers = {
  Query: {
    users: async (): Promise<User[]> => {
      //
      return users;
    },

    user: async (_root, { _id }): Promise<User | null> => {
      const user = await UserModel.findById(_id);
      //
      if (!user) return null;
      return user;
    },
  },
};
