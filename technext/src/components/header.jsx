import React from 'react';
import styles from './header.module.css';
import NavLink from './NavLink';

const navItems = [
  { text: 'Home', isActive: true },
  { text: 'About Us', isActive: false },
  { text: 'Trek', isActive: false },
  { text: 'Yatra', isActive: false },
  { text: 'Tour', isActive: false },
  { text: 'Article', isActive: false },
];

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5623c969c073bff884ce4c16d59eedb292a439739e9a0a366eec19e2e9ac03e9?placeholderIfAbsent=true&apiKey=b78e62ffd44547d0ac591017256a39d6" className={styles.logo} alt="Company logo" />
        <nav className={styles.navContainer}>
          {navItems.map((item, index) => (
            <NavLink key={index} text={item.text} isActive={item.isActive} />
          ))}
        </nav>
        <button className={styles.callButton}>Call Now</button>
      </div>
    </header>
  );
}

export default Header;