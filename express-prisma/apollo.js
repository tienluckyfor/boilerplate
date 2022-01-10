const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const { typeDefs, resolvers } = require('./schemas');
import http from "http";

async function startApolloServer() {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();

    // Additional middleware can be mounted at this point to run before Apollo.
    // app.use('*', jwtCheck, requireAuth, checkScope);

    // Mount Apollo middleware here.
    server.applyMiddleware({ app, path: '/graphql' });
    await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    return { server, app };
}

startApolloServer()