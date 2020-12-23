import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  directive @date(defaultFormat: String = "dd MMM, yy") on FIELD_DEFINITION
  directive @authenticated on FIELD_DEFINITION
  directive @authorized on FIELD_DEFINITION
`;
