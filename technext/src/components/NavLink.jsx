import React from 'react';
import styles from './header.module.css';

function NavLink({ text, isActive }) {
  return (
    <a 
      href="https://web.whatsapp.com/" 
      className={`${styles.navLink} ${isActive ? styles.activeLink : ''}`}
    >
      {text}
    </a>
  );
}

export default NavLink;