import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/catalog">Book Catalog</Link>
    </nav>
  );
};

export default Navbar;