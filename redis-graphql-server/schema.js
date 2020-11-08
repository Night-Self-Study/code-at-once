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
        get(key: String!): String
    }

    type Mutation {
        createUser(key: String!, input: UserInput!): User,
        createProblem(key: String!, input: ProblemInput!): Boolean,
    }

`;