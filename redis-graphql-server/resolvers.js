//resolvers.js
export default {
    Query: {
        get: async (parent, { key }, { client }) => {
            try {
                const result = await client.hgetallAsync(key);
                console.log("result:" + JSON.stringify(result))
                return result.name
            } catch (e) {
                return null;
            }
        }
    },

    Mutation: {
        createUser: async (parent, { key, input }, { client }) => {
            try {
                await client.hmset(key+":"+input.id, input);
                return input;
            } catch (e) {
                console.log(e);
                return false;
            }
        }
    }
}