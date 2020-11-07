import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    ads(_id: ID!): [Ad!]
    reviews(_id: ID!): [Review!]
    negotiations(_id: ID!): [Negotiation!]
    users: [User!]!
    user(_id: String!): User
    wines(
      name: String
      espressioneComunitaria: String
      denomZona: String
      regione: String
    ): [Wine!]
    wine(_id: ID!): Wine
    vineyards(name: String, colore: String): [Vineyard!]
    vineyard(_id: ID!): Vineyard
    me: User
  }
`;
