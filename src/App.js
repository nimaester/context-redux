import React, { useEffect, useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import User from "./Users";
import Search from "./Search";
import Users from "./Users";
import OneUser from "./OneUser";
import Alert from "./Alert";
import About from "./About";
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar github={"Github Finder"} />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/'
                  render={(props) => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={OneUser}/>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
