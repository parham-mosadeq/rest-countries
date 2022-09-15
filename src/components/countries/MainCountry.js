import React, { useContext } from 'react';
import { useState } from 'react';
// *context
import { countriesContext } from '../../context/CountriesContextProvider';
// *components
import Countries from './Countries';
import Pagination from '../Pagination';

const MainCountry = () => {
  const countries = useContext(countriesContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [countryPerPage] = useState(10);
  const [search, setSearch] = useState('');

  const searchCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search)
  );
  const lastIndexOfCountry = currentPage * countryPerPage;
  const firstIndexOfCountry = lastIndexOfCountry - countryPerPage;
  const getCountriesPerPage = searchCountries.slice(
    firstIndexOfCountry,
    lastIndexOfCountry
  );

  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const paginate = (num) => {
    console.log(num);
    setCurrentPage(num);
  };

  return (
    <div className='h-screen text-center flex flex-wrap  flex-col ml-auto mr-auto justify-center align-center'>
      <input
        className='bg-blue-300 rounded-md w-1/4 pl-1 pr-1'
        type='text'
        value={search}
        onChange={handleSearchChange}
      />
      {getCountriesPerPage.map((country) => {
        const {
          name: { common },
        } = country;

        return <Countries key={common} {...country} />;
      })}
      <Pagination
        countryPerPage={countryPerPage}
        totalPage={countries.length}
        paginate={paginate}
      />
    </div>
  );
};

export default MainCountry;
