import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../github/types.js'

const GithubState = (props) => {
  const initialState = {
    user: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // GET USERS

  const searchUsers = (user) => {
    setLoading();
    axios
      .get(
        `https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_SECRET_ID}`
      )
      .then((res) => {
        dispatch({
          type: SEARCH_USERS,
          payload: res.data
        })
      })
  };


  // GET REPOS
  // CLEAR USERS
  // SET LOADING

  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers
      }}
      >
      {props.children}

    </GithubContext.Provider>
  )

}

export default GithubState;