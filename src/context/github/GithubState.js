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

  // GET USER
  // GET REPOS
  // CLEAR USERS
  // SET LOADING

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading
      }}
      >
      {props.children}

    </GithubContext.Provider>
  )

}

export default GithubState;