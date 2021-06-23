"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = apollo_server_express_1.gql `
  input WineInput {
    denominazioneVino: String!
    tipoVino: String
    espressioneComunitaria: EspressioneComunitaria!
    denominazioneZona: DenomZona!
    vitigni: [String]
  }

  input WineInputUpdate {
    _id: ID!
    denominazioneVino: String
    tipoVino: String
    espressioneComunitaria: EspressioneComunitaria
    denominazioneZona: DenomZona
    vitigni: [String]
  }

  type Wine {
    _id: ID!
    denominazioneVino: String!
    tipoVino: String
    espressioneComunitaria: EspressioneComunitaria!
    denominazioneZona: DenomZona!
    vitigni: [String]
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
exports.default = typeDefs;
