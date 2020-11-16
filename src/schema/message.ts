import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  input MessageInput {
    content: String!
    sentTo: ID!
  }

  type MessageResponse implements MutationResponse {
    success: Boolean!
    message: String!
    messageSent: Message
  }

  type Message {
    _id: ID!
    content: String!
    sentBy: User!
    sentTo: User!
    "dateSent: Date!"
    dateFormatted: Date
  }

  extend type Mutation {
    createMessage(message: MessageInput): MessageResponse
  }

  extend type Subscription {
    messageSent: Message!
  }
`;
