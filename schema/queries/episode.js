const graphql = require('graphql');
const { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } = graphql;

const Episode = require('../objects/episode/Episode');

const TVShowService = require('../../services/TVShowService');

module.exports = {
    episode: {
        type: Episode,
        args: {
            api_key: { type: GraphQLString },
            tv_id: { type: GraphQLInt },
            season_number: { type: GraphQLInt },
            episode_number: { type: GraphQLInt },
            language: { type: GraphQLString }
        },
        resolve(parentValue, args, req) {
            return TVShowService.getTVEpisode(args);
        }
    }
}
