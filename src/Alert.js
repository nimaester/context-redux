import React, { Fragment } from "react";

const Alert = ({ alert }) => {
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
