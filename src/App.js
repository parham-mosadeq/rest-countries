import React from 'react';

// *context
import CountriesContextProvider from './context/CountriesContextProvider';

// *router
import Routers from './Routers';

const App = () => {
  return (
    <div>
      <CountriesContextProvider>
        <div className='w-11/12 m-auto mt-6'>
          <Routers />
        </div>
      </CountriesContextProvider>
    </div>
  );
};

export default App;
