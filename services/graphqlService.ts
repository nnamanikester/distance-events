import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  HttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "X-api-key": "da2-hkqb2oaaqjcqtjvkyp743o7awm",
    },
  };
});

const requestLink = createHttpLink({
  uri: "https://y5r3u5232fakxnc353rbtjdyvm.appsync-api.eu-west-1.amazonaws.com/graphql",
});

const link = HttpLink.from([authLink, requestLink]);

export const graphqlService = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
