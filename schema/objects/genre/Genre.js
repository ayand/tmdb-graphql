const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
    GraphQLList,
    GraphQLInt,
    GraphQLFloat
} = graphql;

const Genre = new GraphQLObjectType({
    name: 'Genre',
    fields: () => {
        return {
            id: { type: GraphQLID },
            name: { type: GraphQLString },
        }
    }
})

module.exports = Genre;
