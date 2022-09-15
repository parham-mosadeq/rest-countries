import React from 'react';
// *router
import { Link } from 'react-router-dom';
// *function
import { trimNumber } from '../../services/function';

const Countries = ({
  capital,
  continents,
  flags: { svg },
  population,
  name: { common },
}) => {
  return (
    <>
      <article className='flex max-w-7xl'>
        <div className='img-container'>
          <Link to={`/countries/${common}`}>
            <img className='object-cover' src={svg} alt={common} />
          </Link>
        </div>
        <p>capital:{capital}</p>
        <p>located in:{continents}</p>
        <p> population:{trimNumber(population)}</p>
      </article>
    </>
  );
};

export default Countries;
