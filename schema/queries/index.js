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
  moviesPlayingNow,
  alternativeTitles,
  credits
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
        alternativeTitles,
        credits,
        genres
    })
})

module.exports = RootQueryType;
