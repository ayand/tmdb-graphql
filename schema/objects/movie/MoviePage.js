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

const Movie = require('./Movie');

const MoviePage = new GraphQLObjectType({
    name: 'MoviePage',
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve(parentValue, args, res) {
                    return parentValue.page;
                }
            },
            page: { type: GraphQLInt },
            results: { type: new GraphQLList(Movie) },
            total_results: { type: GraphQLInt },
            total_pages: { type: GraphQLInt }
        }
    }
})

module.exports = MoviePage;
