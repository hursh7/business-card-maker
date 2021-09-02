import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css';

const Login = ({ authService }) => { 
    const onLogin = event => {
        authService.login(event.currentTarget.textContent).then(console.log);
    };
    return (
        <>
            <Header />
            <section className={styles.login_wrap}>
                <p>Login</p>
                <ul className={styles.account_box}>
                    <li>
                        <button onClick={onLogin}>Google</button>
                    </li>
                    <li>
                        <button onClick={onLogin}>Github</button>
                    </li>
                </ul>
            </section>
            <Footer />
        </>    
    );
}

export default Login;