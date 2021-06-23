"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = apollo_server_express_1.gql `
  input NegotiationInput {
    ad: ID!
    forUserAd: ID!
    type: TypeAd!
    #messages: [ID!]
    #isConcluded: Boolean!
  }

  input NegotiationInputUpdate {
    _id: ID!
    #ad: ID!
    #forUserAd: ID!
    #messages: [ID!]
    isConcluded: Boolean!
  }

  type Negotiation {
    _id: ID!
    createdBy: User!
    ad: Ad!
    forUserAd: User!
    messages: [Message!]
    isConcluded: Boolean!
    dateCreated: Date! @date
    dateConcluded: Date @date
    review: [Review]
    type: TypeAd!
  }

  type NegotiationResult {
    negotiations: [Negotiation]
    pageCount: Int
  }

  type NegotiationPayload {
    response: Negotiation
    errors: [Errors]
  }

  extend type Query {
    negotiation(id: ID!): Negotiation @authenticated
    negotiations(
      offset: Int
      orderBy: QueryOrderBy
      limit: Int
      isConcluded: Boolean
    ): NegotiationResult @authenticated
    negotiationsWithUser(forUserAd: ID!): [Negotiation!] @authenticated
    negotiationsForAd(ad: ID!): [Negotiation!] @authenticated
  }

  extend type Mutation {
    createNegotiation(negotiation: NegotiationInput!): NegotiationPayload
      @authenticated
    updateNegotiation(negotiation: NegotiationInputUpdate!): NegotiationPayload
      @authenticated
    deleteNegotiation(id: ID!): NegotiationPayload @authenticated
  }

  extend type Subscription {
    negotiationCreated: Negotiation! @authenticated
    negotiationClosed: Ad! @authenticated
  }
`;
exports.default = typeDefs;
