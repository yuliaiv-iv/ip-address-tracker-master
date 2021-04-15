import React from 'react';
import FormInput from '../FormInput/FormInput';
import './Header.css';

function Header({ searchIp, ipInfo}) {
  return (
    <header className='header'>
      <div className='header__section'>
        <h1 className='header__title'>IP Address Tracker</h1>
        <FormInput
          searchIp={searchIp}
          ipInfo={ipInfo}
        />
      </div>
    </header>
  )
}

export default Header;