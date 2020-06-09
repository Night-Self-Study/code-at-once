import User from '../models/user';
export const resolvers = {
    Query: {
        async allUser() {
            return await User.find();
        }
    },
    Mutation: {
        async createUser(root, { input }) {
            return await User.create(input);
        }
    } 
}