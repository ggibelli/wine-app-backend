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

  type NegotiationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    negotiation: Negotiation
  }

  type Negotiation {
    _id: ID!
    createdBy: User!
    ad: Ad!
    forUserAd: User!
    messages: [Message!]
    isConcluded: Boolean!
    "dateCreated: Date!"
    dateFormatted: Date
    review: [Review]
  }

  extends type Query {
    negotiation(_id: ID!): Negotiation
    negotiations: [Negotiation!]
  }

  extends type Mutation {
    createNegotiation(negotiation: NegotiationInput): NegotiationResponse
    updateNegotiation(
      negotiation: NegotiationInputUpdate
      id: ID!
    ): NegotiationResponse
    deleteNegotiation(id: ID!): NegotiationResponse
  }
`;
