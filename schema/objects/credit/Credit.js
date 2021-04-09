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

const CastCredit = require('./CastCredit');
const CrewCredit = require('./CrewCredit');

const Credit = new GraphQLObjectType({
    name: 'Credit',
    fields: () => {
        return {
            id: { type: GraphQLID },
            cast: { type: new GraphQLList(CastCredit) },
            crew: { type: new GraphQLList(CrewCredit) }
        }
    }
})

module.exports = Credit;
