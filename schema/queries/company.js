const graphql = require('graphql');
const { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } = graphql;

const ProductionCompany = require('../objects/company/ProductionCompany');

const CompanyService = require('../../services/CompanyService');

module.exports = {
    company: {
        type: ProductionCompany,
        args: {
            api_key: { type: GraphQLString },
            company_id: { type: GraphQLID }
        },
        resolve(parentValue, args, req) {
            return CompanyService.getCompany(args);
        }
    }
}
