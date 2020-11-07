import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  input MessageInput {
    content: String!
    sentTo: ID!
  }

  type Message {
    _id: ID!
    content: String!
    sentBy: User!
    sentTo: User!
    "dateSent: Date!"
    dateFormatted: Date
  }
`;
