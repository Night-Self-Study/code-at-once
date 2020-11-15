//schema.js
import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: String!
    password: String!
    name: String!
    email: String!
  }

  type Problem {
    _id: ID!
    title: String!
    problemDescription: [String!]
    inputDescription: [String!]
    outputDescription: [String!]
    inputExample: [String!]
    outputExample: [String!]
  }

  type UserCodeResult {
    _id: ID!
    problemId: Int!
    userId: String!
    language: String!
    submitAt: Date!
    resultType: String!
    message: String!
  }

  scalar Date

  input UserInput {
    id: String!
    password: String!
    name: String!
    email: String!
  }

  input ProblemInput {
    title: String!
    problemDescription: [String!]
    inputDescription: [String!]
    outputDescription: [String!]
    inputExample: [String!]
    outputExample: [String!]
  }

  input UserCodeInput {
    userId: String!
    problemId: Int!
    sourceCode: String!
    language: String!
  }

  type Query {
    getProblem(id: Int!): Problem
  }

  type Mutation {
    createUser(input: UserInput!): User
    createProblem(id: Int!, input: ProblemInput!): Boolean
    markUserCode(input: UserCodeInput!): UserCodeResult
  }
`;
