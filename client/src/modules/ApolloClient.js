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
};

export default client;
