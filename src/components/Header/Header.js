import React from 'react';
import FormInput from '../FormInput/FormInput';
import IpInfo from '../IpInfo/IpInfo';
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <div className='header__section'>
        <h1 className='header__title'>IP Address Tracker</h1>
        <FormInput />
        {/* <IpInfo /> */}
      </div>
    </header>
  )
}

export default Header;