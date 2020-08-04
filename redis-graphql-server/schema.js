import { gql } from 'apollo-server-express';

export default gql`
    type User {
        _id: ID!
        id: String!
        name: String!
        email: String!
    }

    type Query {
        allUser: [User]
    }

`;