import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import User from './Users';
import Search from './Search';
import Users from './Users';
import Spinner from './Spinner'

const App = () => {

  let [loading, setLoading] = useState(true)
  let [users, setUsers] = useState([]);

  const getData = () => {
    axios.get('https://api.github.com/users')
    .then((res) => (setUsers(res.data)))
  }

  useEffect( () => {
    getData();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer).catch(console.log);
  }, [])


  if (loading) {
    return (
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
        <div className="bounce4"></div>
        <div className="bounce5"></div>
        <h1 style={{ color: "blue", marginTop: "5px" }}>LOADING</h1>
      </div>
    );
  };

  return (
    <div className="App">
      <Navbar github={'Github Finder'}/>
      <div className="container">
        <Users users={users}/>
      </div>

    </div>
  );
};

export default App;