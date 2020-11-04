import React from 'react';

const Navbar = ({github}) => {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className='fab fa-github'/> {github}
      </h1>
    </div>
  );
};

export default Navbar;