// src/apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { config } from '../config/config';

const client = new ApolloClient({
  uri: config.X_SERVER, // replace with your GraphQL endpoint
  cache: new InMemoryCache()
});

export default client;
