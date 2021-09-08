import React, { useState, useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';
import { useHistory } from 'react-router';

const Maker = ({ authService }) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'jun',
            company: 'Kakao',
            theme: 'dark',
            title: 'FrontEnd Developer',
            email: 'junhp7@naver.com',
            message: 'go for it',
            fileName: 'fileName',
            fileURL: null
        },
        {
            id: '2',
            name: 'jun2',
            company: 'Kakao',
            theme: 'light',
            title: 'FrontEnd Developer',
            email: 'junhp7@naver.com',
            message: 'go for it',
            fileName: 'fileName',
            fileURL: null
        },
        {
            id: '3',
            name: 'jun3',
            company: 'Kakao',
            theme: 'colorful',
            title: 'FrontEnd Developer',
            email: 'junhp7@naver.com',
            message: 'go for it',
            fileName: 'fileName',
            fileURL: null
        }
    ]);
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user) {
                history.push('/');
            }
        });
    });

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards = {cards} />
                <Preview cards = {cards} />
            </div>
            <Footer />
        </section>
    )
}

export default Maker;