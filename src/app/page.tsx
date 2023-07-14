import styles from './page.module.css';
import { SearchView } from '@/components/SearchView';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default function Home() {
  const client = new ApolloClient({
    uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
    cache: new InMemoryCache(),
    headers: {
      'Content-Type': 'application/json',
      'digitransit-subscription-key': process.env.HSL_API_KEY ?? '',
    },
  });

  client
    .query({
      query: gql`
        query Routes($term: String!) {
          routes(name: $term) {
            gtfsId
            shortName
            longName
            mode
          }
        }
      `,
    })
    .then((result) => console.log(result));

  return (
    <main className={styles.main}>
      <SearchView apiKey={process.env.HSL_API_KEY ?? ''} />
    </main>
  );
}
