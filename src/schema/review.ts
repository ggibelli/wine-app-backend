import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  input ReviewInput {
    negotiation: ID!
    forUser: ID!
    rating: Float!
    content: String!
    type: TypeAd!
  }

  input ReviewInputUpdate {
    _id: ID!
    #negotiation: ID!
    #forUserAd: ID!
    rating: Float
    content: String
    #type: Type!
  }

  type ReviewResult {
    reviews: [Review]
    pageCount: Int
  }

  type Review {
    _id: ID!
    createdBy: User!
    negotiation: Negotiation!
    forUser: User!
    rating: Float!
    dateCreated: Date! @date
    content: String!
    type: TypeAd!
  }

  type ReviewPayload {
    response: Review
    errors: [Errors]
  }

  extend type Query {
    review(id: ID!): Review @authenticated
    reviews(offset: Int, orderBy: QueryOrderBy, limit: Int): ReviewResult
      @authenticated
  }

  extend type Mutation {
    createReview(review: ReviewInput!): ReviewPayload @authenticated
    updateReview(review: ReviewInputUpdate!): ReviewPayload @authenticated
    deleteReview(id: ID!): ReviewPayload @authenticated
  }

  extend type Subscription {
    reviewCreated: Review! @authenticated
  }
`;
