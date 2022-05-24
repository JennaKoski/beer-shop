import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/beer">Beer</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
