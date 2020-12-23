import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Errors {
    name: String
    text: String
  }
`;
