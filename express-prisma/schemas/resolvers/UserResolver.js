// import { prisma } from '../database'
import jwt from 'jsonwebtoken'
// import { APP_SECRET, getUserId } from '../utlility/utils'
import bcrypt from 'bcrypt'
import { GraphQLError } from "graphql"
import {ApolloError} from "apollo-server-errors";
import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export default {

    User: {
        id: (parent, args, context, info) => parent.id,
        email: (parent) => parent.email,
        password: (parent) => parent.password,
        createdAt: (parent) => parent.createdAt,
        updatedAt: (parent) => parent.updatedAt,
    },

    Query: {
        users: (parent, args) => {
            try {
                return prisma.user.findMany({})
            }
            catch (err) {
                console.error(err)
            }
        },
        user: (parent, args) => {
            try {
                return prisma.user.findFirst({
                    where: {
                        id: Number(args.id),
                    },
                })
            }
            catch (err) {
                console.log(err)
            }
        }
    },

    Mutation: {

        signup: async (parent, args, context, info) => {
            try {
                const password = await bcrypt.hash(args.password, 10)
                const user = await context.prisma.user.create({
                    data: { ...args, password }
                })
                // console.log('user', user)
                const token = jwt.sign({ userId: user.id }, APP_SECRET)
                delete user["password"]
                return {
                    token,
                    user,
                }
            }
            catch (e) {
                if (e instanceof Prisma.PrismaClientKnownRequestError) {
                    /**
                     * tham khảo mã lỗi ở đây nha e
                     * https://www.prisma.io/docs/reference/api-reference/error-reference
                     */
                    if (e.code === 'P2002') {
                        throw new ApolloError(`This email already exists!`, {
                            errors:[
                                {"name":"email", "message":"Email da ton tai"}
                            ]
                        });
                    }
                }
                throw new ApolloError(e.message);
            }
        },

        login: async (parent, args, context, info) => {
            try {
                const user = await context.prisma.user.findUnique({ where: { email: args.email } })

                if (!user) {
                    // throw new UserInputError('No such user found', {
                    //     argumentName: 'id'
                    // })
                    return new GraphQLError("123");
                }
                const valid = await bcrypt.compare(args.password, user.password)
                if (!valid) {
                    // throw new UserInputError('Invalid password', {
                    //     argumentName: 'id'
                    // })
                    return new GraphQLError("errCode: 1, ");
                }
                delete user["password"]
                const token = jwt.sign({ userId: user.id }, APP_SECRET)
                return {
                    token,
                    user,
                    errCode
                }
            }
            catch (err) {
                console.error(err)
            }
        },
    }
}


