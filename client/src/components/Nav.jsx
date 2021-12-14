import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar">
      <Link to="/" style={{ textDecoration: 'none', color: 'white', fontFamily: 'Copperplate, Papyrus, fantasy' }}>Baggland</Link><br />
      <Link to="/about" style={{ textDecoration: 'none', color: 'white', fontFamily: 'Copperplate, Papyrus, fantasy' }}>About</Link>
    </nav>
  );
}

export default Nav;