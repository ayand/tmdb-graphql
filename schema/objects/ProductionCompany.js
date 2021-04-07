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

const ProductionCompany = new GraphQLObjectType({
    name: 'ProductionCompany',
    fields: () => {
        return {
            id: { type: GraphQLID },
            logo_path: { type: GraphQLString },
            name: { type: GraphQLString },
            origin_country: { type: GraphQLString }
        }
    }
})

module.exports = ProductionCompany;
