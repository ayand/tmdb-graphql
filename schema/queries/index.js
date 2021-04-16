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

const {
    season
} = require('./season');

const {
    person
} = require('./person');

const {
    episode
} = require('./episode');

const {
    company
} = require('./company');

const {
    companyImages,
    movieImages,
    personImages
} = require('./image');

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
        topRatedShows,
        season,
        person,
        episode,
        company,
        companyImages,
        movieImages,
        personImages
    })
})

module.exports = RootQueryType;
