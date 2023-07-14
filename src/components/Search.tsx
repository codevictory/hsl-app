'use client';

import React, { FormEvent, useState } from 'react';
import { HslRoutesDefault } from '@/types/HslRoutes';
import { useQuery, gql } from '@apollo/client';

const GET_ROUTES = gql`
  query Routes($term: String!) {
    routes(name: $term) {
      gtfsId
      shortName
      longName
      mode
    }
  }
`;

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { loading, error, data } = useQuery(GET_ROUTES, {
    variables: { term: '10' },
  });

  const handleSubmit = async (event: FormEvent<HTMLElement>) => {
    console.log(event);
    event.preventDefault();
  };

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h1>HSL Aikatauluhaku</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <h2>Anna pysäkin nimi</h2>
            <input name='term' />
          </label>
        </fieldset>
        <button type='submit'>Hae</button>
        <ul>
          {data ? (
            data.routes.map((route: any) => {
              return <li key={route.shortName}>{route.longName}</li>;
            })
          ) : (
            <li>asd</li>
          )}
        </ul>
      </form>
    </div>
  );
};
