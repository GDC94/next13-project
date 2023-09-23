import React, { useState } from "react";

import { COUNTRIES } from "./data";

const countryNames = Object.entries(COUNTRIES);

/*
Object.values 0r object.keys

*/

function App() {
  const [country, setCountry] = useState("");

  return (
    <form>
      <fieldset>
        <legend>Shipping Info</legend>
        <label htmlFor='country'>Country:</label>
        <select
          required
          id='country'
          name='country'
          value={country}
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        >
          <option value=''>— Select Country —</option>
          <optgroup label='Countries'>
            {/*Esto sirve para agrupar todas las options*/}
            {countryNames.map(([id, label]) => {
              return (
                <option value={id} key={id}>
                  {label}
                </option>
              );
            })}
          </optgroup>
        </select>
      </fieldset>

      <p className='country-display'>Selected country: {COUNTRIES[country]}</p>

      <button>Submit</button>
    </form>
  );
}

export default App;
