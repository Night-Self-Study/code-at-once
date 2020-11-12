//schema.js
import { gql } from 'apollo-server-express';

export default gql`
   type User{
       _id: ID!
       id: String!
       password: String!
       name: String!
       email: String!
   }

   type Problem{
       _id: ID!
       title: String!
       problemDescription: [String!]
       inputDescription: [String!]
       outputDescription: [String!]
       inputExample:[String!]
       outputExample: [String!] 
   }

   type UserCode{
        _id: ID!
        language: String!
        code: String! 
    }

    type UserCodeResult{
        _id: ID!
        problemId: Int!
        userId: String!
        language: String!
        submitAt: Date!
        resultType: String!
        message: String!
    }

    scalar Date

    input UserInput{
        id: String!
        password: String!
        name: String!
        email: String!
    }

    input ProblemInput{
        title: String!
        problemDescription: [String!]
        inputDescription: [String!]
        outputDescription: [String!]
        inputExample:[String!]
        outputExample: [String!] 
    }

    input CodeInput{
        language: String!
        code: String!
    }

    type Query {
        get(key: String!): String,
        getProblem(id: Int!): Problem
    }

    type Mutation {
        createUser(key: String!, input: UserInput!): User,
        createProblem(id: Int!, input: ProblemInput!): Boolean,
        createExtensionFile(id: String!, input: CodeInput!): UserCodeResult,
    }

`;