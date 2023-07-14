import { HslRoutesDefault } from '../types/HslRoutes';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
  cache: new InMemoryCache(),
});

export const getRoutes = async (apiKey: string): Promise<HslRoutesDefault> => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'digitransit-subscription-key': apiKey ?? '',
    },
    body: '{"query":"{\\n\\troutes(name: \\"10\\") {\\n\\t\\tgtfsId\\n\\t\\tshortName\\n\\t\\tlongName\\n\\t\\tmode\\n\\t}\\n}\\n"}',
  };

  const raw = await fetch(
    'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
    options
  );
  const response = await raw.json();
  console.log('fetch', response);
  return response as HslRoutesDefault;
};
