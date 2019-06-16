const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers');

// Define our schema using the GraphQL schema language

const typeDefs = `
  
    

    type Post {

        id: Int!
        App_name:String!
        Time:String!

    }



    type Query {

        allPosts: [Post]

        fetchPost(id: Int!): Post

    }

    type Mutation {

        addPost (

            id: Int!,
            App_name:String!,
            Time_spent:String!

        ): Post

  
    }

`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });