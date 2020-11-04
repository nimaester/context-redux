import React, {useState, Fragment} from 'react';
import users from './users.json';

const Users = () => {

  return (
    <Fragment>
      {users.map((user) => (
        <div className='card text-center' key={user.login}>
          <img
            src={user.avatar_url}
            alt=''
            className='round-img'
            style={{ width: "60px" }}
          />
          <h3>{user.login}</h3>
          <a href={user.html_url} className='btn btn-dark brn-sm my-1'>
            More
          </a>
        </div>
      ))}
    </Fragment>
  );
};

export default Users;