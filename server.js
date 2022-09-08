const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Define the graphql schema
const schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Root Resolver
const rootResolver = {
    message: () => "hello gql client"
};

// Create the express server and a GraphQL endpoint 
const app = express()
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: rootResolver,
    graphiql: true
}));
app.listen(3000, () => console.log('Express GraphQL server is running on port 3000/graphql'));