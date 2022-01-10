import { gql } from 'apollo-server-express'

export default gql`
type User {
    id: ID!
    email: String!
    password: String
    createdAt: String
    updatedAt: String
  }

  type AuthPayload {
    token: String
    user: User
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    signup(email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
  }
`