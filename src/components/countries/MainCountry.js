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
    <div className='flex flex-wrap  flex-col ml-auto mr-auto w-full '>
      <input
        className='appearance-none border-2 border-gray-200 rounded-sm leading-tight focus:outline-none font-light   '
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
