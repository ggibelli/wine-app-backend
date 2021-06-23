import { gql } from 'apollo-server-express';

const typeDefs = gql`
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
    isViewed: Boolean!
  }

  type MessagePayload {
    response: Message
    errors: [Errors]
  }

  type MessageResult {
    messages: [Message]
    pageCount: Int
  }

  extend type Query {
    message(id: ID!): Message @authenticated
    messagesToUser(sentTo: ID!): [Message!] @authenticated
    messagesForNegotiation(
      negotiation: ID!
      offset: Int = 0
      limit: Int = 10
    ): MessageResult @authenticated
    messages: [Message!] @authenticated
  }

  extend type Mutation {
    createMessage(message: MessageInput!): MessagePayload @authenticated
  }

  extend type Subscription {
    messageSent: Message! @authenticated
  }
`;

export default typeDefs;
