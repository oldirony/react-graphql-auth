const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString
}  = graphql;


const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    emailAddress: { type: GraphQLString }
  }
});

module.export = UserType;
