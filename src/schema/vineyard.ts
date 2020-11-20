import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Vineyard {
    _id: ID!
    name: String!
    colore: Colore!
  }

  input VineyardInput {
    name: String!
    colore: Colore!
  }

  input VineyardInputUpdate {
    name: String
    colore: Colore
  }

  extend type Query {
    vineyards(name: String, colore: String): [Vineyard!] @authenticated
    vineyard(id: ID!): Vineyard @authenticated
  }

  extend type Mutation {
    createVineyard(vineyard: VineyardInput): Vineyard @authorized
    updateVineyard(vineyard: VineyardInputUpdate, id: ID!): Vineyard @authorized
    deleteVineyard(id: ID!): Vineyard @authorized
  }
`;
