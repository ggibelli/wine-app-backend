import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type Mutation { 
  }
`;
