import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Vineyard {
    _id: ID!
    name: String!
    colore: Colore
  }

  input VineyardInput {
    name: String!
    colore: Colore
  }

  input VineyardInputUpdate {
    _id: ID!
    name: String
    colore: Colore
  }

  type VineyardPayload {
    response: Vineyard
    errors: [Errors]
  }

  extend type Query {
    vineyards: [Vineyard!] @authenticated
    vineyard(id: ID!): Vineyard @authenticated
  }

  extend type Mutation {
    createVineyard(vineyard: VineyardInput!): VineyardPayload
      @authorized
      @authenticated
    updateVineyard(vineyard: VineyardInputUpdate!): VineyardPayload
      @authorized
      @authenticated
    deleteVineyard(id: ID!): VineyardPayload @authorized @authenticated
  }
`;

export default typeDefs;
