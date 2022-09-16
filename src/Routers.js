import React from 'react';
// *router
import { Routes, Route, Navigate } from 'react-router-dom';
// *components
import Notfound from './components/notfound/Notfound';
import MainCountry from './components/countries/MainCountry';
import CountriesDetails from './components/countries/CountriesDetails';
const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainCountry />}></Route>
        <Route path='/countries/:name' element={<CountriesDetails />}></Route>
        <Route path='/notfound' element={<Notfound />}></Route>
        <Route path='/*' element={<Navigate to='/notfound' />}></Route>
      </Routes>
    </div>
  );
};

export default Routers;
