import { gql } from 'apollo-server-express';

export const typeDefs = gql`
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
    wines: [Wine!] @authenticated
    wine(id: ID!): Wine @authenticated
  }

  extend type Mutation {
    createWine(wine: WineInput!): WinePayload @authorized @authenticated
    updateWine(wine: WineInputUpdate!): WinePayload @authorized @authenticated
    deleteWine(id: ID!): WinePayload @authorized @authenticated
  }
`;
