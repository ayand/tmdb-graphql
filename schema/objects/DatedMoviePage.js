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

const Movie = require('./Movie');

const DatedMoviePage = new GraphQLObjectType({
    name: 'DatedMoviePage',
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve(parentValue, args, res) {
                    return parentValue.page;
                }
            },
            minimumDate: {
                type: GraphQLString,
                resolve(parentValue, args, res) {
                    return parentValue.dates.minimum;
                }
            },
            maximumDate: {
                type: GraphQLString,
                resolve(parentValue, args, res) {
                    return parentValue.dates.maximum;
                }
            },
            page: { type: GraphQLInt },
            results: { type: new GraphQLList(Movie) },
            total_results: { type: GraphQLInt },
            total_pages: { type: GraphQLInt }
        }
    }
})

module.exports = DatedMoviePage;
