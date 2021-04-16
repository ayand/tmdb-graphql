const graphql = require('graphql');
const { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } = graphql;

const LogoImageContainer = require('../objects/image/LogoImageContainer');
const MovieImageContainer = require('../objects/image/MovieImageContainer');
const ProfileImageContainer = require('../objects/image/ProfileImageContainer');

const ImageService = require('../../services/ImageService');

module.exports = {
    companyImages: {
        type: LogoImageContainer,
        args: {
            api_key: { type: GraphQLString },
            company_id: { type: GraphQLID }
        },
        resolve(parentValue, args, req) {
            return ImageService.getCompanyLogos(args);
        }
    },
    movieImages: {
        type: MovieImageContainer,
        args: {
            api_key: { type: GraphQLString },
            movie_id: { type: GraphQLID },
            language: { type: GraphQLString },
            include_image_language: { type: GraphQLString }
        },
        resolve(parentValue, args, req) {
            return ImageService.getMovieImages(args);
        }
    },
    personImages: {
        type: ProfileImageContainer,
        args: {
            api_key: { type: GraphQLString },
            person_id: { type: GraphQLID }
        },
        resolve(parentValue, args, req) {
            return ImageService.getPersonImages(args);
        }
    }
}
