import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'unfetch';

const GRAPHQL_SERVER_URL = '';
const cache = new InMemoryCache();

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // do something with graphql errors
  }
  if (networkError) {
    // do something with network error
  }
});

const httpLink = new HttpLink({
  uri: GRAPHQL_SERVER_URL,
  fetch,
});

const withLocalState = withClientState({
  defaults: {
    isConnected: true,
  },
  resolvers: {
    Mutation: {
      // eslint-disable-next-line no-shadow
      updateNetworkStatus: (_, { isConnected }, { cache }) => {
        cache.writeData({ data: { isConnected } });
        return null;
      },
    },
  },
});

const link = ApolloLink.from([errorLink, withLocalState, httpLink]);

const apolloClient = new ApolloClient({
  link,
  cache,
});

export default apolloClient;
