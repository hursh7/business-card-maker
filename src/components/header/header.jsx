import React, { memo } from 'react';
import styles from './header.module.css';

const Header = memo(({ onLogout }) => (
  <header className={styles.header}>
    {onLogout && (
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
    )}
    <div className={styles.logo}>
      <img className={styles.img} src='./images/logo.svg' alt='로고' />
      <h1 className={styles.text}>Cardmaker</h1>
    </div>
  </header>
));

export default Header;
