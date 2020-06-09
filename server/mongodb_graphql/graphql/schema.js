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
    }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;