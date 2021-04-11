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

const SeasonSummary = new GraphQLObjectType({
    name: "SeasonSummary",
    fields: () => {
        return {
            air_date: { type: GraphQLString },
            episode_count: { type: GraphQLInt },
            name: { type: GraphQLString },
            overview: { type: GraphQLString },
            id: { type: GraphQLID },
            poster_path: { type: GraphQLString },
            season_number: { type: GraphQLInt }
        }
    }
})

module.exports = SeasonSummary;
