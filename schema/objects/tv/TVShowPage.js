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

const TVShow = require('./TVShow');

const TVShowPage = new GraphQLObjectType({
    name: "TVShowPage",
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve(parentValue, args, res) {
                    return parentValue.page;
                }
            },
            page: { type: GraphQLInt },
            results: { type: new GraphQLList(TVShow) },
            total_results: { type: GraphQLInt },
            total_pages: { type: GraphQLInt }
        }
    }
})

module.exports = TVShowPage;
