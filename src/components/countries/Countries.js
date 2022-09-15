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
  name: { common, official },
}) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          backgroundColor: '#444',
          margin: '1rem auto',
          color: '#fff',
        }}
      >
        <article style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div className='img-container'>
            <Link to={`/countries/${common}`}>
              <img width={30} height={30} src={svg} alt={common} />
            </Link>
          </div>
          <p>capital:{capital}</p>
          <p>located in:{continents}</p>
          <p> population:{trimNumber(population)}</p>
        </article>
      </div>
    </>
  );
};

export default Countries;
