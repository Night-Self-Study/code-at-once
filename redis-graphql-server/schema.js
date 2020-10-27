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

    input UserInput{
        id: String!
        password: String!
        name: String!
        email: String!
    }

    type Query {
        get(key: String! ): String
    }

    type Mutation {
        createUser(key: String!, input: UserInput!): User
    }

`;