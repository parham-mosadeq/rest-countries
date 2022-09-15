import React, { useContext } from 'react';
// *context
import { countriesContext } from '../../context/CountriesContextProvider';
// *routers
import { useParams, useNavigate } from 'react-router-dom';
// *functions
import { trimNumber } from '../../services/function';

const CountriesDetails = () => {
  const countries = useContext(countriesContext);
  const { name } = useParams();
  const filteredCountry = countries.filter(
    (country) => country.name.common === name
  );
  const nav = useNavigate();

  return (
    <>
      {filteredCountry.map((fc) => {
        const {
          capital,
          continents,
          flags: { svg: flagSvg },
          languages,
          population,
          name: { common, official },
          startOfWeek,
          region,
          borders,
          subregion,
        } = fc;
        console.log(fc);
        return (
          <div key={name}>
            <div>
              <img width={100} src={flagSvg} alt={common} />
            </div>
            <p>Name:{common}</p>
            <p>known as :{official}</p>
            <p>capital:{capital}</p>
            <p>region:{region}</p>
            <p> subregion:{subregion}</p>
            <p>continents:{continents}</p>
            <p> startOfWeek:{startOfWeek}</p>
            <p>neighbors: {borders.join(',')}</p>
            <p>{trimNumber(population)}</p>
            <p>{Object.values(languages).join(',')}</p>
          </div>
        );
      })}
      <button onClick={() => nav(-1)}>back</button>
    </>
  );
};

export default CountriesDetails;
