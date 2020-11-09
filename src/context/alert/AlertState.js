import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

import {
  REMOVE_ALERT,
  SET_ALERT
} from '../types.js'

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const changeAlert = (message, type) => {
    dispatch({
      type: SET_ALERT,
      payload: {message, type}
    })
    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT
      });
    }, 1000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        changeAlert,
      }}>
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState;