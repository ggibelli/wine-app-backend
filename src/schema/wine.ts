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

  type WineResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    wine: Wine
  }

  extends type Query {
    wines(
      name: String
      espressioneComunitaria: String
      denomZona: String
      regione: String
    ): [Wine!]
    wine(_id: ID!): Wine
  }

  extends type Mutation {
    createWine(wine: WineInput): WineResponse
    updateWine(wine: WineInputUpdate, id: ID!): WineResponse
    deleteWine(id: ID!): WineResponse
  }
`;
