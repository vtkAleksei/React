import React from 'react';
import './Components_style/Form.css';
import { useState, useRef, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const Form = ({ onSendMessage }) => {
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        onSendMessage({
            author: 'Me',
            text: value,
            id: Date.now(),
        });

        setValue('');
        inputRef.current.focus();
    }

    useEffect (()=>{
        inputRef.current.focus();
    },[]);


    return (
        <form>
            <TextField inputRef={inputRef} id="outlined-basic" label="Сообщение" variant="outlined" color="secondary" value={value} onChange={handleChange} />
            <Button variant="outlined" color="secondary" onClick={handleSubmit} >Отправить</Button>
        </form>
    )

}