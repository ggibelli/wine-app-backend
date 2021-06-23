import { gql } from 'apollo-server-express';

const typeDefs = gql`
  directive @date(defaultFormat: String = "dd MMM yy, H:mm") on FIELD_DEFINITION
  directive @authenticated on FIELD_DEFINITION
  directive @authorized on FIELD_DEFINITION
`;

export default typeDefs;
