import React, { useEffect, useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import User from "./Users";
import Search from "./Search";
import Users from "./Users";
import Alert from "./Alert";
import About from "./About";

const App = () => {
  let [loading, setLoading] = useState(true);
  let [users, setUsers] = useState([]);
  let [alert, setAlert] = useState(null);

  const searchUsers = (user) => {
    setLoading(true);
    axios
      .get(
        `https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_SECRET_ID}`
      )
      .then((res) => {
        setUsers(res.data.items);
      })
      .then(() => {
        clearTimeout(timer);
      })
      .catch(() => {
        console.log("Error");
      });
  };

  const timer = setTimeout(() => {
    setLoading(false);
  }, 800);

  const clearUsers = () => {
    setLoading(true);
    if (users.length) {
      setUsers([]);
    }
  };

  const changeAlert = (message, type) => {
    setAlert({
      message,
      type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <Router>
      <div className='App'>
        <Navbar github={"Github Finder"} />
        <div className='container'>
          <Alert alert={alert} />
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
              <Search
                searchUsers={searchUsers}
                clearUsers={clearUsers}
                users={users}
                changeAlert={changeAlert}
              />
              <Users users={users} loading={loading} />
              </Fragment>
            )} />
            <Route exact path='/about' component={About}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
