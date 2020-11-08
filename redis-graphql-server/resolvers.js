import { stderr, stdout } from 'process';

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
        },
        getProblem: async (parent, { id }, { client }) => {
            try{
                // const result = JSON.stringify(await client.hgetallAsync(key)); 
                const key = "Problem:"+id;
                let problem = await client.hgetallAsync(key);
                problem["problemDescription"] = [problem["problemDescription"]];
                problem["inputDescription"] = [problem["inputDescription"]];
                problem["outputDescription"] = [problem["outputDescription"]];
                problem["inputExample"] = [problem["inputExample"]];
                problem["outputExample"] = [problem["outputExample"]];
                return problem;
            } catch(e) {
                return e;
            }
        }
    },

    Mutation: {
        createUser: async (parent, { key, input }, { client }) => {
            try {
                await client.hmset(key+":"+input.id, input);
                return client.hgetallAsync(key+":"+input.id);
            } catch (e) {
                console.log(e);
                return false;
            }
        },
        createProblem: async (parent, { key, input }, { client}) => {
            try {
                await client.hmset(key, {
                    title: input.title,
                    problemDescription: input.problemDescription.join(),
                    inputDescription: input.inputDescription.join(), 
                    outputDescription: input.outputDescription.join(),
                    inputExample: input.inputExample.join(),
                    outputExample: input.outputExample.join()
                });
                return true;
            } catch (e) {
                return false;
            }
        },
    }
}