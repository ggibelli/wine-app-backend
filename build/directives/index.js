"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizedDirective = exports.AuthenticateDirective = exports.FormatDateDirective = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const apollo_server_express_1 = require("apollo-server-express");
const graphql_1 = require("graphql");
const dateFormat_1 = require("../utils/dateFormat");
class FormatDateDirective extends apollo_server_express_1.SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        const { resolve = graphql_1.defaultFieldResolver } = field;
        const { defaultFormat } = this.args;
        field.args.push({
            name: 'format',
            type: graphql_1.GraphQLString,
            description: undefined,
            defaultValue: undefined,
            deprecationReason: undefined,
            extensions: undefined,
            astNode: undefined,
        });
        field.resolve = async function (root, { format, ...otherArgs }, context, info) {
            const date = await resolve.call(this, root, otherArgs, context, info);
            if (!date)
                return;
            return dateFormat_1.formatDate(date, format || defaultFormat);
        };
        field.type = graphql_1.GraphQLString;
    }
}
exports.FormatDateDirective = FormatDateDirective;
class AuthenticateDirective extends apollo_server_express_1.SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        const resolver = field.resolve || graphql_1.defaultFieldResolver;
        field.resolve = async function (root, args, context, info) {
            if (!context.user) {
                throw new apollo_server_express_1.AuthenticationError('You need to login to continue');
            }
            return resolver(root, args, context, info);
        };
    }
}
exports.AuthenticateDirective = AuthenticateDirective;
class AuthorizedDirective extends apollo_server_express_1.SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        const { resolve = graphql_1.defaultFieldResolver } = field;
        field.resolve = async function (root, args, context, info) {
            if (!context.user.isAdmin) {
                throw new apollo_server_express_1.ForbiddenError('You need to be Admin to continue');
            }
            return resolve.call(this, root, args, context, info);
        };
    }
}
exports.AuthorizedDirective = AuthorizedDirective;
exports.default = {
    date: FormatDateDirective,
    authenticated: AuthenticateDirective,
    authorized: AuthorizedDirective,
};
