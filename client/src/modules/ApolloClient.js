import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://34.224.1.58:3000/graphql',
  cache: new InMemoryCache(),
});

export const QUERIES = {
  GET_PROBLEM: gql`
    query GetProblem($id: Int!) {
      getProblem(id: $id) {
        title
        problemDescription
        inputDescription
        outputDescription
        inputExample
        outputExample
      }
    }
  `,
  ID_DUPLICATION_CHECK: gql`
    query IdDuplicationCheck($input: String!) {
      idDuplicationCheck(input: $input)
    }
  `,
  GET_USER: gql`
    query GetUser($loginInput: LoginInput!) {
      getUser(input: $loginInput)
    }
  `,
  SUBMIT_PROBLEM: gql`
    mutation SubmitProblem($userCodeInput: UserCodeInput!) {
      markUserCode(input: $userCodeInput) {
        problemId
        userId
        language
        submitAt
        resultType
        message
      }
    }
  `,
  CREATE_USER: gql`
    mutation CreateUser($userInput: UserInput!) {
      createUser(input: $userInput) {
        id
        password
        name
        email
      }
    }
  `,
};

export default client;
