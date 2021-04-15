import React, { useState } from 'react';
import './FormInput.css';
import arrow from '../../images/icon-arrow.svg';

function FormInput({ searchIp }) {

  const [search, setSearch] = useState('');

  const handleInputSearch = event => {
    setSearch(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchIp(search);
  }

  return (
    <form 
      className='form' 
      onSubmit={handleSubmit}
    >
      <input
        className='form__input'
        placeholder='Search for any IP address'
        value={search}
        onChange={handleInputSearch}
      />
      <button
        className='form__btn'
        type='submit'
      >
        <img
          className='form__arrow'
          src={arrow}
          alt='arrow'
        />
      </button>
    </form>
  )
}

export default FormInput;