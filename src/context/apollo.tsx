import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import React from "react";

const httpLink = createHttpLink({
  uri: `http://localhost:4000`,
});

interface Props {
  children: React.ReactNode;
}

export function Apollo({ children }: Props) {
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
