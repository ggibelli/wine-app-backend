import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Error {
    name: String
    text: String
  }
`;
