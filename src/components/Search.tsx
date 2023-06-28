'use client';

import React, { FormEvent } from 'react';

export const Search = () => {
  const handleSubmit = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    alert('You have submitted the form.');
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
      </form>
    </div>
  );
};
