const graphql = require('graphql');
const { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } = graphql;

const Genre = require('../objects/Genre');

const GenreService = require('../../services/GenreService');

module.exports = {
    genres: {
        type: new GraphQLList(Genre),
        args: {
            api_key: { type: GraphQLString },
            language: { type: GraphQLString }
        },
        resolve(parentValue, args, req) {
            return GenreService.getGenres(args);
        }
    }
}
