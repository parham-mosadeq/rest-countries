import React, { useContext, useState, useRef } from 'react';
// *context
import { countriesContext } from '../../context/CountriesContextProvider';
// *components
import Countries from './Countries';
import Pagination from '../Pagination';
// *styles
import {
  CountriesContainer,
  CountryContainer,
  SearchInput,
} from '../../styles/StyledComponents';
import { useEffect } from 'react';

const MainCountry = () => {
  const countries = useContext(countriesContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [countryPerPage] = useState(10);
  const [search, setSearch] = useState('');
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const searchCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search)
  );
  // calculating the length of the array to be shown on each page
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
    setCurrentPage(num);
  };

  return (
    <div className='flex flex-wrap  flex-col ml-auto mr-auto w-full '>
      <SearchInput
        placeholder='country name....'
        ref={searchRef}
        type='text'
        value={search}
        onChange={handleSearchChange}
      />

      <CountriesContainer>
        {getCountriesPerPage.map((country) => {
          const {
            name: { common },
          } = country;

          return (
            <CountryContainer key={common}>
              <Countries {...country} />
            </CountryContainer>
          );
        })}
      </CountriesContainer>
      <Pagination
        countryPerPage={countryPerPage}
        totalPage={countries.length}
        paginate={paginate}
      />
    </div>
  );
};

export default MainCountry;
