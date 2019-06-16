const express = require('express');

const bodyParser = require('body-parser');
const resolvers=require('./resolvers')

// const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { ApolloServer, gql } = require('apollo-server-express');

const schema = require('./schema');
const PORT = 3000;
// Create our express app

const app = express();

// Graphql endpoint

const server = new ApolloServer({ schema, resolvers });
server.applyMiddleware({ app });

app.listen(PORT, () => {
    console.log(`GraphiQL is running on http://localhost:${PORT}/graphiql`);

});