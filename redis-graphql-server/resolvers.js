import { stderr, stdout } from 'process';

//resolvers.js
export default {
    Query: {
        getProblem: async (parent, { id }, { client }) => {
            try{
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
        createProblem: async (parent, { id, input }, { client}) => {
            try {
                await client.hmset("Problem:" + id, {
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
                const util = require('util');
                const exec = util.promisify(require('child_process').exec);
                let command = '/home/ubuntu/code-at-once/domjudge-7.2.0/submit -y -p firstbook -l Java hello.java';
                let { stdout, stderr } = await exec(command);
                const [, submit_id] = stderr.split('id = s');
                console.log(submit_id);
                
                 
                command = 'python3 /home/ubuntu/code-at-once/analyze_submission/mapping_not_correct.py '+submit_id.trim();
                const { stdout: cmdout, stderr: cmderr } = await exec(command);
                console.log('stdout:', cmdout);
                console.error('stderr:', cmderr);
                

                return client.hgetallAsync(key);
            } catch (e) {
                console.log(e);
                return false;
            }
        }
    }
}