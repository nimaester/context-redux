import React, {useState} from 'react';

const Search = ({searchUsers}) => {

  let [query, setQuery] = useState('');

  let handleChange = (event) => {
    setQuery(event.target.value)
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    searchUsers(query);
    setQuery('');
  }

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
    </div>
  );
};

export default Search;