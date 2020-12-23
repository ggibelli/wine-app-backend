import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  input MessageInput {
    content: String!
    sentTo: ID!
    negotiation: ID!
  }

  type Message {
    _id: ID!
    content: String!
    sentBy: User!
    sentTo: User!
    negotiation: Negotiation!
    dateSent: Date! @date
  }

  type MessagePayload {
    response: Message
    errors: [Errors]
  }

  extend type Query {
    message(id: ID!): Message @authenticated
    messagesToUser(sentTo: ID!): [Message!] @authenticated
    messagesForNegotiation(negotiation: ID!): [Message!] @authenticated
    messages: [Message!] @authenticated
  }

  extend type Mutation {
    createMessage(message: MessageInput!): MessagePayload @authenticated
  }

  extend type Subscription {
    messageSent: Message! @authenticated
  }
`;
