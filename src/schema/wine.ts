import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  input WineInput {
    denominazioneVino: String!
    aka: String
    espressioneComunitaria: EspressioneComunitaria!
    denominazioneZona: DenomZona!
    regione: Regioni!
  }

  input WineInputUpdate {
    _id: ID!
    denominazioneVino: String
    aka: String
    espressioneComunitaria: EspressioneComunitaria
    denominazioneZona: DenomZona
    regione: Regioni
  }

  type Wine {
    _id: ID!
    denominazioneVino: String!
    aka: String
    espressioneComunitaria: EspressioneComunitaria!
    denominazioneZona: DenomZona!
    regione: Regioni!
  }

  type WinePayload {
    response: Wine
    errors: [Error]
  }

  extend type Query {
    wines: [Wine!] @authenticated
    wine(_id: ID!): Wine @authenticated
  }

  extend type Mutation {
    createWine(wine: WineInput): WinePayload @authorized
    updateWine(wine: WineInputUpdate): WinePayload @authorized
    deleteWine(id: ID!): WinePayload @authorized
  }
`;
