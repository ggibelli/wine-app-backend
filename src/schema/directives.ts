import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  #directive @date(defaultFormat: String = "ddd MMM, yyyy") on FIELD_DEFINITION
  #directive @authenticated on FIELD_DEFINITION
  #directive @authorized on FIELD_DEFINITION
  directive @authorizeda on FIELD_DEFINITION
`;
