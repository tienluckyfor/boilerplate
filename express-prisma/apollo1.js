import {ApolloServer} from 'apollo-server-express'
import {typeDefs} from './graphql/typedefs'
import {resolvers} from './graphql/resolvers'
import {ApolloServerPluginDrainHttpServer} from 'apollo-server-core'
import http from "http";
import express from 'express'

const env = require("./config/env")

const app = express()
const httpServer = http.createServer(app)

async function startApolloServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: async ({req}) => {
            try {
                console.log('11', req.header('Authorization'))
                const token = req.header('Authorization').toString().replace('Bearer ', '')
                // const [, token] = req.headers.authorization.match(/^bearer (\S+)$/i);
                console.log('token', token)
                const {id} = jwt.verify(token, process.env.JWT_SECRET);
                const user = await prisma.user.findUnique({where: {id}});

                if (!user) {
                    throw new Error("User not found");
                }

                const github = new GraphQLClient("https://api.github.com/graphql", {
                    headers: {
                        authorization: `Bearer ${user.githubAccessToken}`,
                    },
                });

                return {
                    prisma,
                    user,
                    github,
                };
            } catch (error) {
                console.log(error);
                throw new AuthenticationError("Invalid token");
            }
        },
        plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
    });
    await server.start();
    server.applyMiddleware({app});
    await new Promise((resolve) => httpServer.listen({port: env.PORT}, resolve));
    console.log(
        `Server is now running on http://localhost:${env.PORT}${server.graphqlPath}`
    );
}

startApolloServer();