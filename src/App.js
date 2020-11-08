import React, { useEffect, useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import User from "./Users";
import Search from "./Search";
import Users from "./Users";
import OneUser from "./OneUser";
import Alert from "./Alert";
import About from "./About";
import GithubState from './context/github/GithubState';

const App = () => {
  let [loading, setLoading] = useState(true);
  let [users, setUsers] = useState([]);
  let [user, setUser] = useState({});
  let [repos, setRepos] = useState([]);
  let [alert, setAlert] = useState(null);

  const timer = setTimeout(() => {
    setLoading(false);
  }, 800);

  const clearUsers = () => {
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

  const getUser = (user) => {
    setLoading(true);
    axios
      .get(
        `https://api.github.com/users/${user}?client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_SECRET_ID}`
      )
      .then((res) => {
        setUser(res.data);
      })
      .then(() => {
        clearTimeout(timer);
      })
      .catch(() => {
        console.log(`Error getting ${user}`);
      });
  };
  const getUserRepos = (user) => {
    setLoading(true);
    axios
      .get(
        `https://api.github.com/users/${user}/repos?per_page=57&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_SECRET_ID}`
      )
      .then((res) => {
        setRepos(res.data);
      })
      .then(() => {
        clearTimeout(timer);
      })
      .catch(() => {
        console.log(`Error getting ${user}`);
      });
  };

  return (
    <GithubState>
      <Router>
        <div className='App'>
          <Navbar github={"Github Finder"} />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      clearUsers={clearUsers}
                      users={users}
                      changeAlert={changeAlert}
                    />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                render={(props) => (
                  <OneUser
                    {...props}
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    repos={repos}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
