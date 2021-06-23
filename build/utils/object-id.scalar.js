"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectIdScalar = void 0;
const graphql_1 = require("graphql");
const mongoose_1 = require("mongoose");
exports.ObjectIdScalar = new graphql_1.GraphQLScalarType({
    name: 'ObjectId',
    description: 'Mongo object id scalar type',
    serialize(value) {
        if (!(value instanceof mongoose_1.Types.ObjectId)) {
            throw new Error('ObjectIdScalar can only serialize ObjectId values');
        }
        return value.toHexString();
    },
    parseValue(value) {
        if (typeof value !== 'string') {
            throw new Error('ObjectIdScalar can only parse string values');
        }
        return new mongoose_1.Types.ObjectId(value);
    },
    parseLiteral(ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw new Error('ObjectIdScalar can only parse string values');
        }
        return new mongoose_1.Types.ObjectId(ast.value);
    },
});
exports.default = exports.ObjectIdScalar;
