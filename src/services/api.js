const baseUrl = 'https://restcountries.com/v3.1';

const getCountries = async () => {
  const response = await fetch(`${baseUrl}/all`);
  const data = await response.json();
  return data;
};

export { getCountries };
