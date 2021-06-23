import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Errors {
    name: String
    text: String
  }
`;

export default typeDefs;
