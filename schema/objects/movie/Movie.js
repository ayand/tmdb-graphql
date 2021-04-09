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

const Movie = new GraphQLObjectType({
    name: 'Movie',
    fields: () => {
        return {
            adult: { type: GraphQLBoolean },
            backdrop_path: { type: GraphQLString },
            budget: { type: GraphQLInt },
            genres: { type: new GraphQLList(Genre) },
            genre_ids: { type: new GraphQLList(GraphQLInt) },
            homepage: { type: GraphQLString },
            id: { type: GraphQLID },
            imdb_id: { type: GraphQLString },
            original_language: { type: GraphQLString },
            original_title: { type: GraphQLString },
            overview: { type: GraphQLString },
            popularity: { type: GraphQLFloat },
            poster_path: { type: GraphQLString },
            production_companies: { type: new GraphQLList(ProductionCompany) },
            production_countries: { type: new GraphQLList(ProductionCountry) },
            release_date: { type: GraphQLString },
            revenue: { type: GraphQLInt },
            runtime: { type: GraphQLInt },
            status: { type: GraphQLString },
            tagline: { type: GraphQLString },
            title: { type: GraphQLString },
            video: { type: GraphQLBoolean },
            vote_average: { type: GraphQLFloat },
            vote_count: { type: GraphQLInt }
        }
    }
})

module.exports = Movie;
