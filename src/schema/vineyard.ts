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

  type VineyardResponse implements MutationResponse {
    success: Boolean!
    message: String!
    vineyard: Vineyard
  }

  extend type Query {
    vineyards(name: String, colore: String): [Vineyard!]
    vineyard(id: ID!): Vineyard
  }

  extend type Mutation {
    createVineyard(vineyard: VineyardInput): VineyardResponse
    updateVineyard(vineyard: VineyardInputUpdate, id: ID!): VineyardResponse
    deleteVineyard(id: ID!): VineyardResponse
  }
`;
