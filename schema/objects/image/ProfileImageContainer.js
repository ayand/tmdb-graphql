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

const ProfileImageContainer = new GraphQLObjectType({
    name: "ProfileImageContainer",
    fields: () => {
        return {
            id: { type: GraphQLID },
            profiles: { type: new GraphQLList(Image) }
        }
    }
});

module.exports = ProfileImageContainer;
