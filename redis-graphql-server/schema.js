export default `
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