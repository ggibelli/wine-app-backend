"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql `
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
