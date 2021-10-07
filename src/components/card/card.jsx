import React, { memo } from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = './images/default_profile.svg';
const Card = memo(({ card }) => {
    const {name, company, title, number, email, message, theme, fileURL} = card;
    const url = fileURL || DEFAULT_IMAGE;
    return (
        <li className={`${styles.card} ${getStyles(theme)}`}>
            <div className={styles.img}>
                <img className={styles.avatar} src={url} alt="profile" />
            </div>
            <div className={styles.info}>
                <div className={styles.nameTitle}>
                    <h1 className={styles.name}>{name}</h1>
                    <p className={styles.title}>{title}</p>
                </div>
                <div className={styles.contents}>
                    <p className={styles.company}>
                        <span className={styles.icon}>
                            <i className="fas fa-briefcase"></i>
                        </span>
                        {company}
                    </p>
                    <p className={styles.number}>
                        <span className={styles.icon}>
                            <i className="fas fa-phone-alt"></i>
                        </span>
                        {number}
                    </p>
                    <p className={styles.email}>
                        <span className={styles.icon}>
                            <i className="fas fa-envelope"></i>
                        </span>
                        {email}
                    </p>
                    <p className={styles.message}>
                        {message}
                    </p>
                </div>
            </div>
        </li>
    );
});

function getStyles(theme) {
    switch(theme) {
        case 'dark':
        return styles.dark;
        case 'light':
        return styles.light;
        case 'colorful':
        return styles.colorful;
            default:
                throw new Error(`unknown theme: ${theme}`);
    }
}

export default Card;