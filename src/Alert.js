import React, { Fragment, useContext } from "react";
import AlertContext from './context/alert/alertContext'

const Alert = () => {

  const alertContext = useContext(AlertContext);
  const {alert} = alertContext;

  return (
    <Fragment>
      {alert !== null && (
        <div className={`alert alert-${alert.type}`}>
          <i className='fas fa-info-circle' /> {alert.message}
        </div>
      )}
    </Fragment>
  );
};

export default Alert;
