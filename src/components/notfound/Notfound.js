import React from 'react';
// *router
import { useNavigate } from 'react-router-dom';

const Notfound = () => {
  const nav = useNavigate();
  return (
    <div className='flex justify-center align-center h-screen mt-5 flex-col text-center text-teal-700 uppercase '>
      <div>
        <h1>sorry didn't find any results</h1>
      </div>
      <button
        className='flex-shrink-0  border-transparent border-4 text-teal-200 transition-colors text-sm py-1 px-2 rounded 
        capitalize bg-teal-900 w-1/8 ml-auto mr-auto mt-3 hover:bg-teal-200 hover:text-teal-900
        '
        onClick={() => nav('/')}
      >
        home
      </button>
    </div>
  );
};

export default Notfound;
