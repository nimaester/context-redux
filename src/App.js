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
    axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_SECRET_ID}`)
    .then((res) => {
      setUsers(res.data)
    })
    .catch(() => {
      console.log('Error')
    })
  }

  const searchUsers = (user) => {
    axios.get(`https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_SECRET_ID}`)
    .then((res) => {
      setUsers(res.data.items)
    })
    .catch(() => {
      console.log('Error')
    })
  }

  const timer = setTimeout(() => {
    setLoading(false);
  }, 1500);

  useEffect( () => {
    getData();
    return () => clearTimeout(timer).catch(console.log);
  }, [])

  return (
    <div className="App">
      <Navbar github={'Github Finder'}/>
      <Search searchUsers={searchUsers}/>
      <div className="container">
        <Users users={users} loading={loading}/>
      </div>

    </div>
  );
};

export default App;