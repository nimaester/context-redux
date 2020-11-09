import React, { useState, useContext } from "react";
import GithubContext from './context/github/githubContext';
import AlertContext from './context/alert/alertContext';

const Search = () => {

  let githubContext = useContext(GithubContext);
  let {users, clearUsers} = githubContext;
  let alertContext = useContext(AlertContext);
  let {changeAlert} = alertContext;

  let [query, setQuery] = useState("");

  let handleChange = (event) => {
    setQuery(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    if (query === "") {
      changeAlert("Enter something in searchbox", "light");
    } else {
      githubContext.searchUsers(query);
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

export default Search;
