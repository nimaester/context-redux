import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, clearUsers, users, changeAlert }) => {
  let [query, setQuery] = useState("");

  let handleChange = (event) => {
    setQuery(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    if (query === "") {
      changeAlert("Enter something in searchbox", "light");
    } else {
      searchUsers(query);
      setQuery("");
    }
  };

  return (
    <div className='search'>
      <form onSubmit={handleSubmit} className='form'>
        <input
          value={query}
          onChange={handleChange}
          type='text'
          name='text'
          placeholder='Search Users...'
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {users.length ? (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      ) : null}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  changeAlert: PropTypes.func.isRequired,
};

export default Search;
