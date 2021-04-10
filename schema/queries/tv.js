const graphql = require('graphql');
const { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } = graphql;

const Credit = require('../objects/credit/Credit');
const TVShow = require('../objects/tv/TVShow');
const TVShowPage = require('../objects/tv/TVShowPage');

const TVShowService = require('../../services/TVShowService');

module.exports = {
    tvShow: {
        type: TVShow,
        args: {
            api_key: { type: GraphQLString },
            tv_id: { type: GraphQLID },
            language: { type: GraphQLString }
        },
        resolve(parentValue, args, req) {
            return TVShowService.getTVShow(args);
        }
    },
    tvShowCredits: {
        type: Credit,
        args: {
            api_key: { type: GraphQLString },
            tv_id: { type: GraphQLID },
            language: { type: GraphQLString }
        },
        resolve(parentValue, args, req) {
            return TVShowService.getTVShowCredits(args);
        }
    },
    showsAiringToday: {
        type: TVShowPage,
        args: {
            api_key: { type: GraphQLString },
            language: { type: GraphQLString },
            page: { type: GraphQLInt }
        },
        resolve(parentValue, args, req) {
            return TVShowService.getShowsAiringToday(args);
        }
    },
    showsOnAir: {
        type: TVShowPage,
        args: {
            api_key: { type: GraphQLString },
            language: { type: GraphQLString },
            page: { type: GraphQLInt }
        },
        resolve(parentValue, args, req) {
            return TVShowService.getShowsOnAir(args);
        }
    },
    popularShows: {
        type: TVShowPage,
        args: {
            api_key: { type: GraphQLString },
            language: { type: GraphQLString },
            page: { type: GraphQLInt }
        },
        resolve(parentValue, args, req) {
            return TVShowService.getPopularShows(args);
        }
    },
    topRatedShows: {
        type: TVShowPage,
        args: {
            api_key: { type: GraphQLString },
            language: { type: GraphQLString },
            page: { type: GraphQLInt }
        },
        resolve(parentValue, args, req) {
            return TVShowService.getTopRatedShows(args);
        }
    }
}
