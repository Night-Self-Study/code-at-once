//resolvers.js
export default {
  Query: {
    getProblem: async (parent, { id }, { client }) => {
      try {
        const key = "Problem:" + id;
        let problem = await client.hgetallAsync(key);
        problem["problemDescription"] = [problem["problemDescription"]];
        problem["inputDescription"] = [problem["inputDescription"]];
        problem["outputDescription"] = [problem["outputDescription"]];
        problem["inputExample"] = [problem["inputExample"]];
        problem["outputExample"] = [problem["outputExample"]];
        return problem;
      } catch (e) {
        return e;
      }
    },
  },

  Mutation: {
    createUser: async (parent, { input }, { client }) => {
      try {
        await client.hmset("User:" + input.id, input);
        return client.hgetallAsync("User:" + input.id);
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    createProblem: async (parent, { id, input }, { client }) => {
      try {
        await client.hmset("Problem:" + id, {
          title: input.title,
          problemDescription: input.problemDescription.join(),
          inputDescription: input.inputDescription.join(),
          outputDescription: input.outputDescription.join(),
          inputExample: input.inputExample.join(),
          outputExample: input.outputExample.join(),
        });
        return true;
      } catch (e) {
        return false;
      }
    },
    markUserCode: async (parent, { id, input }, { client }) => {
      try {
        await client.hmset("Submission" + id, input);
        const fs = require("fs");
        let filename;
        if (input.language === "python") {
          filename = id + "_" + input.problemId + "_" + input.userId + ".py";
          fs.writeFileSync(filename, input.sourceCode);
        } else if (input.language === "java") {
          filename = id + "_" + input.problemId + "_" + input.userId + ".java";
          fs.writeFileSync(filename, input.sourceCode);
        }

        const util = require("util");
        const exec = util.promisify(require("child_process").exec);
        let command =
          "/home/ubuntu/code-at-once/domjudge-7.2.0/submit -y -p firstbook -l " +
          input.language +
          " " +
          filename;
        let { stdout, stderr } = await exec(command);
        const [, submit_id] = stderr.split("id = s");

        //set submit_id command temporarily
        command =
          "python3 /home/ubuntu/code-at-once/analyze_submission/mapping_not_correct.py " +
          (submit_id - 1).toString();
        const { stdout: cmdout, stderr: cmderr } = await exec(command);
        // console.log('stdout:', cmdout);
        // console.error('stderr:', cmderr);
        const result = cmdout.split("\n");

        return {
          problemId: input.problemId,
          userId: input.userId,
          language: input.language,
          submitAt: new Date().toISOString(),
          resultType: result[0],
          message: result[1],
        };
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
