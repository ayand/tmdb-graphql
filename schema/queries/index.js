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
  movieCredits
} = require('./movie');

const {
    genres
} = require('./genre');

const {
    tvShow,
    tvShowCredits
} = require('./tv');

const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        genres,
        movie,
        movieSearch,
        similarMovies,
        latestMovie,
        popularMovies,
        topRatedMovies,
        upcomingMovies,
        moviesPlayingNow,
        alternativeTitles,
        movieCredits,
        tvShow,
        tvShowCredits
    })
})

module.exports = RootQueryType;
