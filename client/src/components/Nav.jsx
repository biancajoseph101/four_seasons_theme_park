import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar">
      <Link to="/">Baggland</Link><br/>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Nav;