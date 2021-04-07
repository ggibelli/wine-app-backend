"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
const graphql_1 = require("graphql");
const language_1 = require("graphql/language");
exports.resolvers = {
    Date: new graphql_1.GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {
            return new Date(value); // value from the client
        },
        serialize(value) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            return value.getTime(); // value sent to the client
        },
        parseLiteral(ast) {
            if (ast.kind === language_1.Kind.INT) {
                return parseInt(ast.value, 10); // ast value is always in string format
            }
            return null;
        },
    }),
};
