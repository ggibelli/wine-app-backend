import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  interface MutationResponse {
    success: Boolean!
    message: String!
  }
`;
