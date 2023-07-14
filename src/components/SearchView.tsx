'use client';

import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Search } from './Search';

type SearchViewProps = {
  apiKey: string;
};

export const SearchView = (props: SearchViewProps) => {
  const client = new ApolloClient({
    uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
    cache: new InMemoryCache(),
    headers: {
      'Content-Type': 'application/json',
      'digitransit-subscription-key': props.apiKey,
    },
  });

  return (
    <ApolloProvider client={client}>
      <Search />
    </ApolloProvider>
  );
};
