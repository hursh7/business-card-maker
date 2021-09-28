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
                <h2 className={styles.title}>Welcome to Cardmaker</h2>
                <p className={styles.text}>
                    Start with your social account and Make your 
                    <br /> 
                    own business card!
                </p>
                <img class={styles.img} src="/images/main_bg.png" alt="메인이미지" />
                <ul className={styles.container}>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>
                            <img className={styles.icon} src="/images/google.svg" alt="구글" />
                            <p>Sign in with Google</p>
                        </button>
                    </li>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>
                            <img className={styles.icon} src="/images/github.svg" alt="깃허브" />
                            <p>Sign in with Github</p>
                        </button>
                    </li>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin} disabled="disabled">
                            <img className={styles.icon} src="/images/facebook.svg" alt="페이스북" />
                            <p>Sign in with Facebook</p>
                        </button>
                    </li>
                </ul>
            </section>
            <Footer />
        </section>    
    );
}

export default Login;