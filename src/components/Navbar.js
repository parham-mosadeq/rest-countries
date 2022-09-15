import React from 'react';
// *router
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
