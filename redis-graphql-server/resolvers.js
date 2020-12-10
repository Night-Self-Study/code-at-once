//resolvers.js
import fs from "fs";
import util from "util";
import child_process from "child_process";

export default {
  Query: {
    getUser: async (parent, { input }, { client }) => {
      try {
        const user = await client.hgetallAsync("User:" + input.id);
        if (user == null) {
          return false;
        }
        if (user.id) {
          if (user.password == input.password) {
            return true;
          }
        }
        return false;
      } catch (e) {
        return e;
      }
    },
    getProblem: async (parent, { id }, { client }) => {
      try {
        const key = "Problem:" + id;
        let problem = await client.getAsync(key);
        const newProblem = JSON.parse(problem);

        return newProblem;
      } catch (e) {
        return e;
      }
    },
    idDuplicationCheck: async (parent, { input }, { client }) => {
      try {
        const key = "User:" + input;
        const checkID = await client.hgetallAsync(key);
        if (checkID == null) {
          return true;
        }
        console.log(await client.hgetallAsync(key));
        return false;
      } catch (e) {
        console.log(e);
        return false;
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
        const problemDetail = JSON.stringify(input);
        await client.set("Problem:" + id, problemDetail);
        return true;
      } catch (e) {
        return false;
      }
    },
    markUserCode: async (parent, { input }, { client }) => {
      try {
        let filename;
        if (input.language === "python") {
          filename = input.problemId + "_" + input.userId + ".py";
          fs.writeFileSync(filename, input.sourceCode);
        } else if (input.language === "java") {
          filename = input.problemId + "_" + input.userId + ".java";
          fs.writeFileSync(filename, input.sourceCode);
        }
        const exec = util.promisify(child_process.exec);
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
          submit_id.toString();
        const { stdout: cmdout, stderr: cmderr } = await exec(command);
        // console.log('stdout:', cmdout);
        // console.error('stderr:', cmderr);
        const result = cmdout.split("\n");
        await client.hmset("Submission" + submit_id, input);

        return {
          problemId: input.problemId,
          userId: input.userId,
          language: input.language,
          submitAt: new Date().toISOString(),
          resultType: result[0],
          message: result.slice(1).join("\n"),
        };
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
