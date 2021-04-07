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

const ProductionCountry = new GraphQLObjectType({
    name: 'ProductionCountry',
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve(parentValue, args, res) {
                    return parentValue.iso_3166_1;
                }
            },
            iso_3166_1: { type: GraphQLString },
            name: { type: GraphQLString }
        }
    }
})

module.exports = ProductionCountry;
