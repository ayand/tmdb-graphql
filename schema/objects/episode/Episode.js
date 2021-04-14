const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
    GraphQLList,
    GraphQLInt,
    GraphQLFloat
} = graphql;

const CastCredit = require('../credit/CastCredit');
const CrewCredit = require('../credit/CrewCredit');

const Episode = new GraphQLObjectType({
    name: "Episode",
    fields: () => {
        return {
            air_date: { type: GraphQLString },
            crew: { type: new GraphQLList(CrewCredit) },
            episode_number: { type: GraphQLInt },
            guest_stars: { type: new GraphQLList(CastCredit) },
            name: { type: GraphQLString },
            overview: { type: GraphQLString },
            id: { type: GraphQLID },
            production_code: { type: GraphQLString },
            season_number: { type: GraphQLInt },
            still_path: { type: GraphQLString },
            vote_average: { type: GraphQLFloat },
            vote_count: { type: GraphQLInt }
        }
    }
})

module.exports = Episode;
