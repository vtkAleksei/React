import React, {useCallback} from 'react';
import {Message} from './Message';
import './Components_style/MessageList.css';

export const MessageList  = ({messages}) => {
    const renderMessage = useCallback((mess) => (
        <Message text={mess.text} author={mess.author} key={mess.id} />
    ),[]);    
    return messages.map(renderMessage);
}