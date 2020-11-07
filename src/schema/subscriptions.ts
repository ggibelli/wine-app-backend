import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Subscription {
    messageSent: Message!
    adPosted: Ad!
  }
`;
