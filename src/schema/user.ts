import { gql } from 'apollo-server-express';

const typeDefs = gql`
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

export default typeDefs;
