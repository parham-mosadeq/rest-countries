import React from 'react';
// *router
import { useNavigate } from 'react-router-dom';

const Notfound = () => {
  const nav = useNavigate();
  return (
    <div>
      <h1>sorry didn't find any results</h1>
      <button onClick={() => nav('/')}>home</button>
    </div>
  );
};

export default Notfound;
