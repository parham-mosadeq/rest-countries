import React from 'react';
// *router
import { Link } from 'react-router-dom';
// *function
import { trimNumber } from '../../services/function';
// *styles
import { Article, CountryImg, Paragraphs } from '../../styles/StyledComponents';

const Countries = ({
  capital,
  continents,
  flags: { svg },
  population,
  name: { common },
}) => {
  return (
    <>
      <Article>
        <div>
          <Link to={`/countries/${common}`}>
            <CountryImg src={svg} alt={common} />
          </Link>
        </div>
        <Paragraphs>
          <p>capital:{capital}</p>
          <p>located in:{continents}</p>
          <p> population:{trimNumber(population)}</p>
        </Paragraphs>
      </Article>
    </>
  );
};

export default Countries;
