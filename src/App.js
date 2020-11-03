import React from 'react';
import Navbar from './Navbar';
import User from './Users';

const App = () => {
  return (
    <div>
      <Navbar github={'Github Finder'}/>
      <User/>

    </div>
  );
};

export default App;