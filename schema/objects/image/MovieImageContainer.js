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

const Image = require('./Image');

const MovieImageContainer = new GraphQLObjectType({
    name: "MovieImageContainer",
    fields: () => {
        return {
            id: { type: GraphQLID },
            backdrops: { type: new GraphQLList(Image) },
            posters: { type: new GraphQLList(Image) }
        }
    }
});

module.exports = MovieImageContainer;
