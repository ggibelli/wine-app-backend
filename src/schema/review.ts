import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  input ReviewInput {
    negotiation: ID!
    forUserAd: ID!
    rating: ID!
    content: String!
    type: Type!
  }
  type Review {
    _id: ID!
    createdBy: User!
    negotiation: Negotiation!
    forUserAd: User!
    rating: Rating!
    "dateCreated: Date!"
    dateFormatted: Date
    content: String!
    type: Type!
  }
`;
