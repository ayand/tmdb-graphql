const graphql = require('graphql');
const { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } = graphql;

const Season = require('../objects/season/Season');

const TVShowService = require('../../services/TVShowService');

module.exports = {
    season: {
        type: Season,
        args: {
            api_key: { type: GraphQLString },
            tv_id: { type: GraphQLInt },
            season_number: { type: GraphQLInt },
            language: { type: GraphQLString }
        },
        resolve(parentValue, args, req) {
            return TVShowService.getTVSeason(args);
        }
    }
}
