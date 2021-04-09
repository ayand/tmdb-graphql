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

const Title = require('./Title');

const MovieTitle = new GraphQLObjectType({
    name: 'MovieTitle',
    fields: () => {
        return {
            id: { type: GraphQLID },
            titles: { type: new GraphQLList(Title) }
        }
    }
})

module.exports = MovieTitle;
