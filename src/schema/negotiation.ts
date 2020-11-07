import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  input NegotiationInput {
    ad: ID!
    forUserAd: ID!
    messages: [ID!]
    isConcluded: Boolean!
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
  }
`;
