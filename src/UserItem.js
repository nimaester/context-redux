import React, {useState} from 'react';

const UserItem = ({user}) => {


  return (
    <div className='card text-center'>
      <img src={user.avatar_url} className='round-img' style={{width: '60px'}} alt='' />
      <h3>{user.login}</h3>
      <div>
        <a href={user.html_url} className="btn btn-dark btn-sm my-1">More</a>
      </div>
    </div>
  );
};

export default UserItem;