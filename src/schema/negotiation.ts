import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  input NegotiationInput {
    ad: ID!
    forUserAd: ID!
    #messages: [ID!]
    #isConcluded: Boolean!
  }

  input NegotiationInputUpdate {
    #ad: ID!
    #forUserAd: ID!
    #messages: [ID!]
    isConcluded: Boolean
  }

  type Negotiation {
    _id: ID!
    createdBy: User!
    ad: Ad!
    forUserAd: User!
    messages: [Message!]
    isConcluded: Boolean!
    dateCreated: Date! @date
    review: [Review]
  }

  extend type Query {
    negotiation(_id: ID!): Negotiation @authenticated
    negotiations: [Negotiation!] @authenticated
  }

  extend type Mutation {
    createNegotiation(negotiation: NegotiationInput): Negotiation @authenticated
    updateNegotiation(
      negotiation: NegotiationInputUpdate
      id: ID!
    ): Negotiation @authenticated
    deleteNegotiation(id: ID!): Negotiation @authenticated
  }
`;
