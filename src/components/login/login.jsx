import { useHistory } from 'react-router';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css';
import { useEffect } from 'react';

const Login = ({ authService }) => {
    const history = useHistory(); 
    const goToMaker = userId => {
        history.push({
            pathname: '/maker',
            state: { id: userId },
        });
    };

    const onLogin = event => {
        authService
        .login(event.currentTarget.textContent)
        .then(data => goToMaker(data.user.uid));
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            user && goToMaker(user.uid);
        });
    });

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