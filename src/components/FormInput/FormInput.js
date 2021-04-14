import React from 'react';
import './FormInput.css';
import arrow from '../../images/icon-arrow.svg'

function FormInput() {
  return (
    <form className='form'>
      <input
        className='form__input'
        placeholder='Search for any IP address'
      />
      <button className='form__btn'>
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