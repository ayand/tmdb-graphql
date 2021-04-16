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

const LogoImageContainer = new GraphQLObjectType({
    name: "LogoImageContainer",
    fields: () => {
        return {
            id: { type: GraphQLID },
            logos: { type: new GraphQLList(Image) }
        }
    }
});

module.exports = LogoImageContainer;
