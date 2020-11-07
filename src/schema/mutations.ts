import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Token {
    value: String!
  }

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type AdResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    ad: Ad
  }

  type MessageResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    messageSent: Message
  }

  type NegotiationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    negotiation: Negotiation
  }

  type ReviewResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    review: Review
  }

  type UserResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    user: User
  }

  type LoginResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    token: Token
  }

  type VineyardResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    vineyard: Vineyard
  }

  type WineResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    wine: Wine
  }

  type Mutation {
    createAd(ad: AdInput): AdResponse
    updateAd(ad: AdInput, id: ID!): AdResponse
    createMessage(message: MessageInput): MessageResponse
    createNegotiation(negotiation: NegotiationInput): NegotiationResponse
    updateNegotiation(
      negotiation: NegotiationInput
      id: ID!
    ): NegotiationResponse
    createReview(review: ReviewInput): ReviewResponse
    updateReview(review: ReviewInput, id: ID!): ReviewResponse
    createUser(user: UserInput): UserResponse
    updateUser(user: UserInput, id: ID!): UserResponse
    login(mail: String!, password: String!): LoginResponse
    createVineyard(vineyard: VineyardInput): VineyardResponse
    updateVineyard(vineyard: VineyardInput, id: ID!): VineyardResponse
    createWine(wine: WineInput): WineResponse
    updateWine(wine: WineInput, id: ID!): WineResponse
  }
`;
