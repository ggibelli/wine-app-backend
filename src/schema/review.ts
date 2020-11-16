import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  input ReviewInput {
    negotiation: ID!
    forUserAd: ID!
    rating: ID!
    content: String!
    type: TypeAd!
  }

  input ReviewInputUpdate {
    #negotiation: ID!
    #forUserAd: ID!
    rating: ID
    content: String
    #type: Type!
  }

  type ReviewResponse implements MutationResponse {
    success: Boolean!
    message: String!
    review: Review
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
    type: TypeAd!
  }

  extend type Query {
    review(id: ID!): Review
    reviews(forUser: ID, type: TypeAd): [Review!]
  }

  extend type Mutation {
    createReview(review: ReviewInput): ReviewResponse
    updateReview(review: ReviewInputUpdate, id: ID!): ReviewResponse
    deleteReview(id: ID!): ReviewResponse
  }
`;
