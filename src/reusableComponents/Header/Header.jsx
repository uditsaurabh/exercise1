import React from 'react';
import './Header.css';
function Header({ children }) {
  return <section className='header'>{children}</section>;
}

export default Header;
