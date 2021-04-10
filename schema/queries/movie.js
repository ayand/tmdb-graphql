const graphql = require('graphql');
const { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } = graphql;

const Movie = require('../objects/movie/Movie');
const MoviePage = require('../objects/movie/MoviePage');
const DatedMoviePage = require('../objects/movie/DatedMoviePage');
const MovieTitle = require('../objects/title/MovieTitle');
const Credit = require('../objects/credit/Credit');

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
    movieSearch: {
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
    },
    similarMovies: {
        type: MoviePage,
        args: {
            api_key: { type: GraphQLString },
            movie_id: { type: GraphQLID },
            page: { type: GraphQLInt },
            language: { type: GraphQLString }
        },
        resolve(parentValue, args, req) {
            return MovieService.getSimilarMovies(args);
        }
    },
    latestMovie: {
        type: Movie,
        args: {
            api_key: { type: GraphQLString },
            language: { type: GraphQLString }
        },
        resolve(parentValue, args, req) {
            return MovieService.getLatestMovie(args);
        }
    },
    popularMovies: {
        type: MoviePage,
        args: {
            api_key: { type: GraphQLString },
            language: { type: GraphQLString },
            page: { type: GraphQLInt },
            region: { type: GraphQLString }
        },
        resolve(parentValue, args, req) {
            return MovieService.getPopularMovies(args);
        }
    },
    topRatedMovies: {
        type: MoviePage,
        args: {
            api_key: { type: GraphQLString },
            language: { type: GraphQLString },
            page: { type: GraphQLInt },
            region: { type: GraphQLString }
        },
        resolve(parentValue, args, req) {
            return MovieService.getTopRatedMovies(args);
        }
    },
    moviesPlayingNow: {
        type: DatedMoviePage,
        args: {
            api_key: { type: GraphQLString },
            language: { type: GraphQLString },
            page: { type: GraphQLInt },
            region: { type: GraphQLString }
        },
        resolve(parentValue, args, req) {
            return MovieService.getMoviesPlayingNow(args);
        }
    },
    upcomingMovies: {
        type: DatedMoviePage,
        args: {
            api_key: { type: GraphQLString },
            language: { type: GraphQLString },
            page: { type: GraphQLInt },
            region: { type: GraphQLString }
        },
        resolve(parentValue, args, req) {
            return MovieService.getUpcomingMovies(args);
        }
    },
    alternativeTitles: {
        type: MovieTitle,
        args: {
            api_key: { type: GraphQLString },
            movie_id: { type: GraphQLID },
            country: { type: GraphQLString }
        },
        resolve(parentValue, args, req) {
            return MovieService.getMovieTitles(args);
        }
    },
    movieCredits: {
        type: Credit,
        args: {
            api_key: { type: GraphQLString },
            movie_id: { type: GraphQLID },
            language: { type: GraphQLString }
        },
        resolve(parentValue, args, req) {
            return MovieService.getMovieCredits(args);
        }
    }
}
