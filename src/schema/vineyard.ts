import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  input VineyardInput {
    name: String!
    colore: Colore!
  }

  type Vineyard {
    _id: ID!
    name: String!
    colore: Colore!
  }
`;
