"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql `
  directive @date(defaultFormat: String = "dd MMM yy, H:mm") on FIELD_DEFINITION
  directive @authenticated on FIELD_DEFINITION
  directive @authorized on FIELD_DEFINITION
`;
