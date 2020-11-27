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
    _id: ID!
    name: String
    colore: Colore
  }

  type VineyardPayload {
    response: Vineyard
    errors: [Error]
  }

  extend type Query {
    vineyards: [Vineyard!] @authenticated
    vineyard(id: ID!): Vineyard @authenticated
  }

  extend type Mutation {
    createVineyard(vineyard: VineyardInput): VineyardPayload @authorized
    updateVineyard(vineyard: VineyardInputUpdate): VineyardPayload @authorized
    deleteVineyard(id: ID!): VineyardPayload @authorized
  }
`;
