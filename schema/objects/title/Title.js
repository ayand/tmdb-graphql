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

const Title = new GraphQLObjectType({
    name: 'Title',
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve(parentValue, args, res) {
                    return parentValue.iso_3166_1;
                }
            },
            iso_3166_1: { type: GraphQLString },
            title: { type: GraphQLString },
            type: { type: GraphQLString }
        }
    }
})

module.exports = Title;
