import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  input NegotiationInput {
    ad: ID!
    forUserAd: ID!
    #messages: [ID!]
    #isConcluded: Boolean!
  }

  input NegotiationInputUpdate {
    _id: ID!
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

  type NegotiationPayload {
    response: Negotiation
    errors: [Error]
  }

  extend type Query {
    negotiation(_id: ID!): Negotiation @authenticated
    negotiations: [Negotiation!] @authenticated
  }

  extend type Mutation {
    createNegotiation(negotiation: NegotiationInput): NegotiationPayload
      @authenticated
    updateNegotiation(negotiation: NegotiationInputUpdate): NegotiationPayload
      @authenticated
    deleteNegotiation(id: ID!): NegotiationPayload @authenticated
  }
`;
