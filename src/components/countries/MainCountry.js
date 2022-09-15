import React, { useContext } from 'react';
import { useState } from 'react';
// *context
import { countriesContext } from '../../context/CountriesContextProvider';
// *components
import Countries from './Countries';

const MainCountry = () => {
  const countries = useContext(countriesContext);

  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const searchCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search)
  );

  return (
    <div>
      <input type='text' value={search} onChange={handleSearchChange} />
      {searchCountries.map((country) => {
        const {
          name: { common },
        } = country;

        return <Countries key={common} {...country} />;
      })}
    </div>
  );
};

export default MainCountry;
