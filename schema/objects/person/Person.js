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

const Person = new GraphQLObjectType({
    name: "Person",
    fields: () => {
        return {
            birthday: { type: GraphQLString },
            known_for_department: { type: GraphQLString },
            deathday: { type: GraphQLString },
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            also_known_as: { type: new GraphQLList(GraphQLString) },
            gender: { type: GraphQLInt },
            biography: { type: GraphQLString },
            popularity: { type: GraphQLFloat },
            place_of_birth: { type: GraphQLString },
            profile_path: { type: GraphQLString },
            adult: { type: GraphQLBoolean },
            imdb_id: { type: GraphQLString },
            homepage: { type: GraphQLString }
        }
    }
})

module.exports = Person;
