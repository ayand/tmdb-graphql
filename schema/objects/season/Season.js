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

const Season = new GraphQLObjectType({
    name: "Season",
    fields: () => {
        return {
            _id: { type: GraphQLString },
            air_date: { type: GraphQLString },
            name: { type: GraphQLString },
            overview: { type: GraphQLString },
            id: { type: GraphQLID },
            poster_path: { type: GraphQLString },
            season_number: { type: GraphQLInt }
        }
    }
})

module.exports = Season;
