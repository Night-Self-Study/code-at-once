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
        },
        createExtensionFile: async (parent, { key, input }, { client }) => {
            try {
                //temp -> 문제 번호 사용자 id 조합으로 바꿔주기
                await client.hmset(key, input);
                const fs = require('fs');
                if(input.language === 'python'){
                    fs.writeFileSync('temp'+'.py', input.code);
                } else if(input.language === 'java'){
                    fs.writeFileSync('temp'+'.java', input.code);
                }
                return input;
            } catch (e) {
                console.log(e);
                return false;
            }
        }
    }
}