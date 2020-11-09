import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://34.224.1.58:3000/graphql',
  cache: new InMemoryCache(),
});

export default client;
