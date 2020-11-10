import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type ProducedWines {
    wine: Wine!
    bottlesProduced: Int
    metodoProduttivo: MetodoProduttivo
  }

  type OwnedVineyards {
    vineyard: Vineyard!
    tonsProduced: Int
    metodoProduttivo: MetodoProduttivo
  }

  input ProducedWinesInput {
    wine: ID!
    bottlesProduced: Int
    metodoProduttivo: MetodoProduttivo
  }

  input OwnedVineyardsInput {
    vineyard: ID!
    tonsProduced: Int
    metodoProduttivo: MetodoProduttivo
  }

  input UserInput {
    username: String!
    email: String!
    firstName: String!
    lastName: String!
    pIva: String!
    phoneNumber: String!
    address: AddressInput!
    #verified: Boolean
    #premium: Boolean
    #ads: [ID!]
    #negotiations: [ID!]
    #reviews: [ID!]
    #adsRemaining: Int
    producedWines: ProducedWinesInput
    ownedVineyards: OwnedVineyardsInput
  }

  input UserInputUpdate {
    username: String
    email: String
    firstName: String
    lastName: String
    pIva: String
    phoneNumber: String
    address: AddressInput
    verified: Boolean
    premium: Boolean
    ads: [ID!]
    negotiations: [ID!]
    reviews: [ID!]
    adsRemaining: Int
    producedWines: ProducedWinesInput
    ownedVineyards: OwnedVineyardsInput
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    firstName: String!
    lastName: String!
    pIva: String!
    phoneNumber: String!
    address: Address!
    verified: Boolean!
    premium: Boolean!
    ads: [Ad!]
    negotiations: [Negotiation!]
    reviews: [Review!]
    adsRemaining: Int
    dateCreated: Date!
    dateFormatted: Date
    producedWines: ProducedWines
    ownedVineyards: OwnedVineyards
  }

  type UserResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    user: User
  }

  type Token {
    value: String!
  }

  type LoginResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    token: Token
  }

  extend type Query {
    users(premium: Boolean, verified: Boolean): [User!]
    user(id: ID!): User
    me: User
  }

  extend type Mutation {
    createUser(user: UserInput): UserResponse
    updateUser(user: UserInputUpdate, id: ID!): UserResponse
    deleteUser(id: ID!): UserResponse
    login(mail: String!, password: String!): LoginResponse
  }
`;
