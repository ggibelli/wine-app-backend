import {
  SchemaDirectiveVisitor,
  AuthenticationError,
  ForbiddenError,
} from 'apollo-server-express';
import { defaultFieldResolver, GraphQLField, GraphQLString } from 'graphql';
import { formatDate } from '../utils/dateFormat';

class FormatDateDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: GraphQLField<any, any>) {
    const { resolve = defaultFieldResolver } = field;
    const { defaultFormat } = this.args;

    field.args.push({
      name: 'format',
      type: GraphQLString,
      description: undefined,
      defaultValue: undefined,
      deprecationReason: undefined,
      extensions: undefined,
      astNode: undefined,
    });

    field.resolve = async function (
      root,
      { format, ...otherArgs },
      context,
      info
    ) {
      const date = await resolve.call(this, root, otherArgs, context, info);
      return formatDate(date, format || defaultFormat);
    };
    field.type = GraphQLString;
  }
}

class AuthorizedDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: GraphQLField<any, any>) {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async function (root, args, context, info) {
      if (!context.user.isAdmin) {
        throw new ForbiddenError('You need to be Admin to continue');
      }
      return await resolve.call(this, root, args, context, info);
    };
  }
}

class AuthenticateDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: GraphQLField<any, any>) {
    const resolver = field.resolve || defaultFieldResolver;
    field.resolve = async function (root, args, context, info) {
      //console.log(args);
      //console.log(args[2].user);
      if (!context.user) {
        throw new AuthenticationError('You need to login to continue');
      }
      return resolver(root, args, context, info);
    };
  }
}

module.exports = {
  date: FormatDateDirective,
  authenticated: AuthenticateDirective,
  authorized: AuthorizedDirective,
};