const graphql = require('graphql');
const { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } = graphql;

const Person = require('../objects/person/Person');

const PersonService = require('../../services/PeopleService');

module.exports = {
    person: {
        type: Person,
        args: {
            api_key: { type: GraphQLString },
            person_id: { type: GraphQLID },
            language: { type: GraphQLString }
        },
        resolve(parentValue, args, req) {
            return PersonService.getPerson(args);
        }
    }
}
