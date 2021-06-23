"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = apollo_server_express_1.gql `
  type Errors {
    name: String
    text: String
  }
`;
exports.default = typeDefs;
