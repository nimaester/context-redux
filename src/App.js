import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import User from './Users';
import Search from './Search';
import Users from './Users';

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

  return (
    <div className="App">
      <Navbar github={'Github Finder'}/>
      <div className="container">
        <Users users={users} loading={loading}/>
      </div>

    </div>
  );
};

export default App;