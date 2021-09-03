import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css';

const Login = ({ authService }) => { 
    const onLogin = event => {
        authService.login(event.currentTarget.textContent).then(console.log);
    };
    return (
        <section className={styles.login}>
            <Header />
            <section>
                <h2 className={styles.title}>Login</h2>
                <ul className={styles.account_box}>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>
                            Google
                        </button>
                    </li>
                    <li>
                        <button className={styles.button} onClick={onLogin}>
                            Github
                        </button>
                    </li>
                </ul>
            </section>
            <Footer />
        </section>    
    );
}

export default Login;