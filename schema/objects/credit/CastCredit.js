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

const CastCredit = new GraphQLObjectType({
    name: "CastCredit",
    fields: () => {
        return {
            adult: { type: GraphQLBoolean },
            gender: { type: GraphQLInt },
            id: { type: GraphQLID },
            known_for_department: { type: GraphQLString },
            name: { type: GraphQLString },
            original_name: { type: GraphQLString },
            popularity: { type: GraphQLFloat },
            profile_path: { type: GraphQLString },
            cast_id: { type: GraphQLInt },
            character: { type: GraphQLString },
            credit_id: { type: GraphQLString },
            order: { type: GraphQLInt }
        }
    }
})

module.exports = CastCredit;
