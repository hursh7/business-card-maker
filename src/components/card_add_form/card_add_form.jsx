import React, { memo, useRef, useState } from 'react';
import ButtonAdd from '../button_add/button_add';
import styles from './card_add_form.module.css';

const CardAddForm = memo(({ FileInput, onAdd }) => {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const numberRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const [file, setFile] = useState({
        fileName: null, 
        fileURL: null
    });

    const onFileChange = file => {
        console.log(file);
        setFile({
            fileName: file.name,
            fileURL: file.url,
        });
    };
    
    const onSubmit = event => {
        event.preventDefault();
        const card = {
            id: Date.now(), 
            name: nameRef.current.value || '', 
            company: companyRef.current.value || '', 
            theme: themeRef.current.value || '', 
            title: titleRef.current.value || '', 
            number: numberRef.current.value || '', 
            email: emailRef.current.value || '', 
            message: messageRef.current.value || '',
            fileName: file.fileName || '',
            fileURL: file.fileURL || '', 
        };
        formRef.current.reset();
        setFile({ fileName: null, fileURL: null });
        onAdd(card);
    };
    return (
        <form ref={formRef} className={styles.form}>
            <input
            ref={nameRef} 
            className={styles.input} 
            type="text" 
            name="name" 
            placeholder="Name" 
            />
            <input
            ref={titleRef} 
            className={styles.input} 
            type="text" 
            name="title" 
            placeholder="Title" 
            />
            <input
            ref={companyRef} 
            className={styles.input} 
            type="text" 
            name="company" 
            placeholder="Company" 
            />
            <input
            ref={numberRef} 
            className={styles.input} 
            type="text" 
            name="number" 
            placeholder="Phone Number" 
            />
            <input
            ref={emailRef} 
            className={styles.input} 
            type="text" 
            name="email" 
            placeholder="Email" 
            />
            <select
            ref={themeRef} 
            className={styles.select} 
            name="theme" 
            placeholder="Theme">
                <option placeholder="light">light</option>
                <option placeholder="dark">dark</option>
                <option placeholder="colorful">colorful</option>
            </select>
            <textarea
            ref={messageRef} 
            className={styles.textarea} 
            name="message" 
            placeholder="Message" 
            />
            <div className={styles.fileInput}>
                <FileInput name={file.fileName} onFileChange = {onFileChange} />
            </div>
            <ButtonAdd className={styles.add} name='Add' onClick= {onSubmit} />
        </form>
    )
});

export default CardAddForm;