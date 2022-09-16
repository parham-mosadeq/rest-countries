import React, { useContext } from 'react';
// *context
import { countriesContext } from '../../context/CountriesContextProvider';
// *routers
import { useParams, useNavigate } from 'react-router-dom';
// *functions
import { trimNumber } from '../../services/function';
// *style
import style from '../../styles/CountriesDetails.module.css';

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
          <div className={style.container} key={name}>
            <div className={style.image}>
              <img src={flagSvg} alt={common} />
            </div>
            <div className={style.info}>
              <p>
                Name: <span>{common}</span>
              </p>
              <p>
                known as :<span>{official}</span>
              </p>
              <p>
                capital:
                <span>{capital}</span>
              </p>
              <p>
                region:
                <span>{region}</span>
              </p>
              <p>
                subregion:
                <span>{subregion}</span>
              </p>
              <p>
                continents:
                <span>{continents}</span>
              </p>
              <p>
                startOfWeek:
                <span>{startOfWeek}</span>
              </p>
              <p>
                neighbors:
                <span>{borders.join(',')}</span>
              </p>
              <p>
                population:
                <span>{trimNumber(population)}</span>
              </p>
              <p>
                languages:
                <span>{Object.values(languages).join(',')}</span>
              </p>
            </div>
          </div>
        );
      })}
      <button onClick={() => nav(-1)}>back</button>
    </>
  );
};

export default CountriesDetails;
