import React, { memo } from 'react';
import styles from './button_add.module.css';

const ButtonAdd = memo(({ name, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {name || 'Add'}
  </button>
));

export default ButtonAdd;
