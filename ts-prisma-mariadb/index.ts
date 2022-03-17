import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import http from 'http';
import typeDefs from "./src/graphql/typeDefs";
import {resolvers} from "./src/graphql/resolvers";
import app from "./app";
import {decodeAuthHeader} from "./src/utils/auth";

async function startApolloServer() {
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        context: async ({ req }) => {
            const user = await decodeAuthHeader(req);
            return {
                ...req,
                user
            }
        }
    });
    await server.start();
    server.applyMiddleware({ app });
    await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer();