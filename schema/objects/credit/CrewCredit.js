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

const CrewCredit = new GraphQLObjectType({
    name: "CrewCredit",
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
            credit_id: { type: GraphQLString },
            department: { type: GraphQLString },
            job: { type: GraphQLString }
        }
    }
})

module.exports = CrewCredit;
