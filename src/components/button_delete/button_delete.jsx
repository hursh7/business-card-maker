import React, { memo } from 'react';
import styles from './button_delete.module.css';

const ButtonDelete = memo(({ name, onClick }) => (
    <button className={`${styles.button} ${name ? styles.red : styles.blue}`} onClick={onClick}>
        {name || 'Add'}
    </button>
));

export default ButtonDelete;