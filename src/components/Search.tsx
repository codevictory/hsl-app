'use client';

import React, { FormEvent, useState } from 'react';
import * as api from '@/api';

type SearchProps = {
  processEnv: any;
};

type HslResponse = {
  data: {
    routes: [
      {
        gtfsId: string;
        longName: string;
        mode: string;
        shortName: string;
      }
    ];
  };
};

export const Search = (props: SearchProps) => {
  const [response, setResponse] = useState<HslResponse>();

  const handleSubmit = async (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    setResponse(await api.getRoutes(props.processEnv.HSL_API_KEY));
  };

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
          {response ? (
            response.data.routes.map((route) => {
              console.log(route.longName);
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
