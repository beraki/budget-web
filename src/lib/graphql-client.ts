import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.REACT_APP_API_ENDPOINT}graphql`,
  }),
  cache: new InMemoryCache(),
});

export { client };
