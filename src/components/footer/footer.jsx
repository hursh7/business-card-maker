import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo(() => (
  <footer className={styles.footer}>
    <p>Copyright 2021. Jun</p>
  </footer>
));

export default Footer;
