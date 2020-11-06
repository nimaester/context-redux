import PropTypes from "prop-types";
import React, { useState, Fragment } from "react";
import UserItem from "./UserItem";
import Spinner from "./Spinner";

const Users = ({ users, loading }) => {
  if (loading) {
    return (
      <div className='spinner'>
        <Spinner />
      </div>
    );
  }

  return (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
