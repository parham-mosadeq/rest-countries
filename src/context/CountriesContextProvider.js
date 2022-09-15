import React, { createContext, useEffect, useState } from 'react';
import { getCountries } from '../services/api';

export const countriesContext = createContext();

const CountriesContextProvider = ({ children }, countriesName) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async (countriesName) => {
      setData(await getCountries(countriesName));
    };

    fetchData();

    return () => {
      setData([]);
    };
  }, []);

  return (
    <>
      <countriesContext.Provider value={data}>
        {children}
      </countriesContext.Provider>
    </>
  );
};

export default CountriesContextProvider;
