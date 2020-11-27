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
    _id: ID!
    #negotiation: ID!
    #forUserAd: ID!
    rating: ID
    content: String
    #type: Type!
  }

  type Review {
    _id: ID!
    createdBy: User!
    negotiation: Negotiation!
    forUserAd: User!
    rating: Rating!
    dateCreated: Date! @date
    content: String!
    type: TypeAd!
  }

  type ReviewPayload {
    response: Review
    errors: [Error]
  }

  extend type Query {
    review(id: ID!): Review @authenticated
    reviews: [Review!] @authenticated
  }

  extend type Mutation {
    createReview(review: ReviewInput): ReviewPayload @authenticated
    updateReview(review: ReviewInputUpdate): ReviewPayload @authenticated
    deleteReview(id: ID!): ReviewPayload @authenticated
  }
`;
