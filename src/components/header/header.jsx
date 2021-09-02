import React from 'react';
import styles from './header.module.css';

const Header = (props) => (
        <header className={styles.header}>
            <img src="/images/logo.png" alt="로고" />
            <h1 className={styles.title}>Business Card Maker</h1>
        </header>    
    );

export default Header;