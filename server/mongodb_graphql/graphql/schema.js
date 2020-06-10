import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers' 
const typeDefs = `
    type User {
        _id: ID!
        id: String!
        password: String!
        name: String!
        email: String!
    }

    type Query {
        allUser: [User]
        getUser(id: String!, password: String!): User
    }

    input UserInput {
        id: String!
        password: String!
        name: String!
        email: String!
    }

    type Mutation {
        createUser(input: UserInput): User
    }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;