const graphql = require('graphql');
const { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } = graphql;

const Movie = require('../objects/Movie');
const MoviePage = require('../objects/MoviePage');

const MovieService = require('../../services/MovieService');

module.exports = {
    movie: {
        type: Movie,
        args: {
            api_key: { type: GraphQLString },
            movie_id: { type: GraphQLID }
        },
        resolve(parentValue, args, req) {
            return MovieService.getMovie(args);
        }
    },
    movie_search: {
        type: MoviePage,
        args: {
            api_key: { type: GraphQLString },
            query: { type: GraphQLString },
            page: { type: GraphQLInt },
            language: { type: GraphQLString }
        },
        resolve(parentValue, args, req) {
            return MovieService.searchMovies(args);
        }
    }
}
