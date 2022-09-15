import React from 'react';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/name/iran')
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }, []);
  return <div></div>;
};

export default App;
