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
    tvShowCredits,
    showsAiringToday,
    showsOnAir,
    popularShows,
    topRatedShows
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
        tvShowCredits,
        showsAiringToday,
        showsOnAir,
        popularShows,
        topRatedShows
    })
})

module.exports = RootQueryType;
