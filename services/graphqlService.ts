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
      "X-api-key": "da2-frbj2qpdvjh6bptdholrtw7kqi",
    },
  };
});

const requestLink = createHttpLink({
  uri: "",
});

const link = HttpLink.from([authLink, requestLink]);

export const graphqlService = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
