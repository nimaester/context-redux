import React from 'react';

const Navbar = ({github}) => {
  return (
    <div className='navbar bg-primary'>
      <i className='fab fa-github'/>{github}
    </div>
  );
};

export default Navbar;