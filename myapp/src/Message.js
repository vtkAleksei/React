import './Message.css';
import { useState, useCallback, useEffect } from 'react';


export const MessagesList = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (messages.length && messages[messages.length - 1].author !== 'Robot:') {
            setTimeout(() => {
                const robotMess = { author: 'Robot:', text: ' Чем могу помочь?' };
                setMessages([...messages, robotMess]);
            }, 700);

        }
    }, [messages]);

    const handleClick = useCallback(() => {
        let textMessage = document.querySelector(".app__text");
        const newMessage = { author: "Вы: ", text: textMessage.value };

        setMessages([...messages, newMessage]);
        textMessage.value = "";
        textMessage.focus();
    }, [messages]);


    return (
        <div className="app__chat">

            {messages.map((mess) => (
                <div className="app__message">
                    <p className="app__author">{mess.author}</p>
                    <p className="app__message_text">{mess.text}</p>
                </div>
            ))}
            <div className="app__action">
                <input className="app__text"></input>
                <button className="app__button" onClick={handleClick}>Отправить</button>
            </div>
        </div>
    )
}