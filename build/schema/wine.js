"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql `
  input WineInput {
    denominazioneVino: String!
    aka: String
    espressioneComunitaria: EspressioneComunitaria!
    denominazioneZona: DenomZona!
    regione: [Regioni!]!
  }

  input WineInputUpdate {
    _id: ID!
    denominazioneVino: String
    aka: String
    espressioneComunitaria: EspressioneComunitaria
    denominazioneZona: DenomZona
    regione: [Regioni]
  }

  type Wine {
    _id: ID!
    denominazioneVino: String!
    aka: String
    espressioneComunitaria: EspressioneComunitaria!
    denominazioneZona: DenomZona!
    regione: [Regioni!]!
  }

  type WinePayload {
    response: Wine
    errors: [Errors]
  }

  extend type Query {
    wines: [Wine!]
    wine(id: ID!): Wine
  }

  extend type Mutation {
    createWine(wine: WineInput!): WinePayload @authorized @authenticated
    updateWine(wine: WineInputUpdate!): WinePayload @authorized @authenticated
    deleteWine(id: ID!): WinePayload @authorized @authenticated
  }
`;
