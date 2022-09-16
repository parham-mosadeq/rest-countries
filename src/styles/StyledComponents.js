import styled from 'styled-components';

const CountriesContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 760px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1170px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CountryContainer = styled.div`
  max-width: 500px;
  max-height: 350px;
`;

const SearchInput = styled.input`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  width: 50%;
  margin: 0 auto;
  padding: 0.245rem 0.56rem;
  transition: box-shadow 0.2s linear;
  :focus {
    outline: 0;
    box-shadow: 0 10px 8px rgba(0, 0, 0, 0.3);
  }
`;

const Article = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  padding: 1rem;
  border-radius: 13px;
  max-height: 250px;
`;

const CountryImg = styled.img`
  display: block;
  width: 50%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s linear;
  :hover {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.5);
  }
`;

const Paragraphs = styled.div`
  color: orangered;
  text-transform: capitalize;
  letter-spacing: 1.3px;
  font-size: 12px;
  font-weight: lighter;
  line-height: 1.4;
`;

export {
  CountriesContainer,
  CountryContainer,
  SearchInput,
  Article,
  CountryImg,
  Paragraphs,
};
