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

  extend type Query {
    review(id: ID!): Review @authenticated
    reviews(forUser: ID, type: TypeAd): [Review!] @authenticated
  }

  extend type Mutation {
    createReview(review: ReviewInput): Review @authenticated
    updateReview(review: ReviewInputUpdate, id: ID!): Review @authenticated
    deleteReview(id: ID!): Review @authenticated
  }
`;
