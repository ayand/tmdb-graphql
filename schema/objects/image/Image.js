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

const Image = new GraphQLObjectType({
    name: "Image",
    fields: () => {
        return {
            id: {
              type: GraphQLID,
              resolve(parentValue, args, req) {
                  if (parentValue.id) {
                      return parentValue.id
                  }
                  return parentValue.file_path;
              }
            },
            aspect_ratio: { type: GraphQLFloat },
            file_path: { type: GraphQLString },
            height: { type: GraphQLInt },
            file_type: { type: GraphQLString },
            vote_average: { type: GraphQLFloat },
            vote_count: { type: GraphQLInt },
            width: { type: GraphQLInt },
            iso_639_1: { type: GraphQLString }
        }
    }
})

module.exports = Image;
