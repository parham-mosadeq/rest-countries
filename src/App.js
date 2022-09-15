import React from 'react';

// *context
import CountriesContextProvider from './context/CountriesContextProvider';

// *router
import Routers from './Routers';

// *components
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      
      <Navbar />
      <CountriesContextProvider>
        <Routers />
      </CountriesContextProvider>
    </div>
  );
};

export default App;
