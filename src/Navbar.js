import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ github }) => {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className='fab fa-github' /> {github}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.proptypes = {
  github: PropTypes.string.isRequired,
};
export default Navbar;
