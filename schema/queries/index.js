const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const { movie, movie_search } = require('./movie');

const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        movie,
        movie_search
    })
})

module.exports = RootQueryType;
