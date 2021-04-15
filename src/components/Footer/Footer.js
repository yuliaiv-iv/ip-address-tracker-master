import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      Challenge by 
      <a 
        className='footer__link'
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      > Frontend Mentor
      </a>. 
      Coded by <a className='footer__link' href="https://github.com/yuliaiv-iv" target="_blank">Yulia Ivanova</a>
    </footer>
  )
}

export default Footer;