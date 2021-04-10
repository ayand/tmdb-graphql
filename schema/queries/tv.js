const graphql = require('graphql');
const { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } = graphql;

const Credit = require('../objects/credit/Credit');
const TVShow = require('../objects/tv/TVShow');

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
    }
}
