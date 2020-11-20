import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  directive @date(defaultFormat: String = "ddd MMM, yyyy") on FIELD_DEFINITION
  directive @authenticated on FIELD_DEFINITION
  directive @authorized(role: Role) on FIELD_DEFINITION
`;
