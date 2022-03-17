import {gql} from "apollo-server-express";

export const UserTypeDefs = gql`
    type Query {
        all_users: [User]
        detail_user(user: DetailUserInput!): User
        detail_me: User
    }

    type Mutation {
        register(user: RegisterInput!): RegisterResponse
        login(user: LoginInput!): LoginResponse
    }

    type User {
        id: ID
        name: String
        email: String
        password: String
        createdAt: String
        updatedAt: String
    }

    type RegisterResponse {
        access_token: String
        user: User
        message: String
    }

    type LoginResponse {
        access_token: String
        user: User
    }

    input DetailUserInput {
        id: ID!     
    }
    
    input RegisterInput {
        name: String!
        email: String!
        password: String!
        confirmPassword: String!
    }

    input LoginInput {
        email: String!
        password: String!
    }
`;
