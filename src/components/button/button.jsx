import React, { memo } from 'react';
import styles from './button.module.css';

const Button = memo(({ name, onClick, onFileChange }) => (
    <button className={`${styles.button} ${name ? styles.red : styles.blue}`} onClick={onClick}>
        {name || 'Add'}
    </button>
));

export default Button;