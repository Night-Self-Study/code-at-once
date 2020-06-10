import User from '../models/user';
import { SingleFieldSubscriptionsRule } from 'graphql';
export const resolvers = {
    Query: {
        async allUser() {
            return await User.find();
        },
        async getUser(root, { id, password }){
            return await User.fi;
        }
    },
    Mutation: {
        async createUser(root, { input }) {
            return await User.create(input);
        }
    } 
}