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

const Genre = require('../genre/Genre');
const ProductionCompany = require('../company/ProductionCompany');
const ProductionCountry = require('../country/ProductionCountry');

const TVShow = new GraphQLObjectType({
    name: "TVShow",
    fields: () => {
        return {
            backdrop_path: { type: GraphQLString },
            episode_run_time: { type: new GraphQLList(GraphQLInt) },
            first_air_date: { type: GraphQLString },
            genres: { type: new GraphQLList(Genre) },
            homepage: { type: GraphQLString },
            id: { type: GraphQLID },
            in_production: { type: GraphQLBoolean },
            languages: { type: new GraphQLList(GraphQLString) },
            last_air_date: { type: GraphQLString },
            name: { type: GraphQLString },
            number_of_episodes: { type: GraphQLInt },
            number_of_seasons: { type: GraphQLInt },
            origin_country: { type: new GraphQLList(GraphQLString) },
            original_language: { type: GraphQLString },
            original_name: { type: GraphQLString },
            overview: { type: GraphQLString },
            popularity: { type: GraphQLFloat },
            poster_path: { type: GraphQLString },
            production_companies: { type: new GraphQLList(ProductionCompany) },
            production_countries: { type: new GraphQLList(ProductionCountry) },
            status: { type: GraphQLString },
            tagline: { type: GraphQLString },
            type: { type: GraphQLString },
            vote_average: { type: GraphQLFloat },
            vote_count: { type: GraphQLInt }
        }
    }
});

module.exports = TVShow;
