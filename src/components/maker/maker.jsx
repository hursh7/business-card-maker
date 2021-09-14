import React, { useState, useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';
import { useHistory } from 'react-router';

const Maker = ({ FileInput, authService }) => {
    const [cards, setCards] = useState({
        1: {
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
        2: {
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
        3: {
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
    });

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

    const createOrupdateCard = card => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
    };

    const deleteCard = card => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
    };


    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor
                FileInput={FileInput} 
                cards ={cards} 
                addCard={createOrupdateCard} 
                updateCard ={createOrupdateCard} 
                deleteCard={deleteCard}
                />
                <Preview cards ={cards} />
            </div>
            <Footer />
        </section>
    )
}

export default Maker;