const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const {
  movie,
  movieSearch,
  similarMovies,
  latestMovie,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
  moviesPlayingNow
} = require('./movie');

const {
    genres
} = require('./genre');

const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        movie,
        movieSearch,
        similarMovies,
        latestMovie,
        popularMovies,
        topRatedMovies,
        upcomingMovies,
        moviesPlayingNow,
        genres
    })
})

module.exports = RootQueryType;
