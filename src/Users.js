import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "./Spinner";
import GithubContext from './context/github/githubContext';


const Users = () => {
  let githubContext = useContext(GithubContext);
  let { users, loading } = githubContext;

  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
  };

  if (loading) {
    return (
      <div className='spinner'>
        <Spinner />
      </div>
    );
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user}/>
        )) }
      </div>
    );
  }
};

export default Users;
