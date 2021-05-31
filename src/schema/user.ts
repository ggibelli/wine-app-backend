import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type ProducedWines {
    wine: Wine!
    bottlesProduced: Int!
    metodoProduttivo: MetodoProduttivo!
  }

  type OwnedVineyards {
    vineyard: Vineyard!
    tonsProduced: Int!
    metodoProduttivo: MetodoProduttivo!
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
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    pIva: String!
    phoneNumber: String!
    address: AddressInput!
    hideContact: Boolean!
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
    _id: ID!
    email: String
    password: String
    firstName: String
    lastName: String
    pIva: String
    phoneNumber: String
    address: AddressInput
    isVerified: Boolean
    isPremium: Boolean
    hideContact: Boolean!
    producedWines: ProducedWinesInput
    ownedVineyards: OwnedVineyardsInput
  }

  type Coordinates {
    latitude: Float
    longitude: Float
  }

  type User {
    _id: ID!
    email: String!
    firstName: String!
    lastName: String!
    pIva: String!
    phoneNumber: String!
    address: Address!
    isVerified: Boolean!
    coordinates: Coordinates
    isPremium: Boolean
    isAdmin: Boolean!
    hideContact: Boolean!
    ads: [Ad!]
    savedAds: [Ad!]
    messages: [Message!]
    negotiations: [Negotiation!]
    reviews: [Review!]
    adsRemaining: Int @authorized
    dateCreated: Date! @date
    producedWines: ProducedWines
    ownedVineyards: OwnedVineyards
  }

  type AuthUser {
    token: String!
    user: User!
  }

  type AuthUserPayload {
    response: AuthUser
    errors: [Errors]
  }

  type UserPayload {
    response: User
    errors: [Errors]
  }

  extend type Query {
    users: [User!] @authenticated
    user(id: ID!): User @authenticated
    me: User @authenticated
  }

  extend type Mutation {
    createUser(user: UserInput!): AuthUserPayload
    updateUser(user: UserInputUpdate!): UserPayload @authenticated
    deleteUser(id: ID!): UserPayload @authenticated
    login(email: String!, password: String!): AuthUserPayload
  }
`;
