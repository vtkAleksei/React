import './Components_style/Home.css';
import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { MessageList } from './MessageList';
import { Form } from './Form';
import { List, ListItem } from '@material-ui/core';
import { ListItemChat } from './ListItemChat';
import { Redirect, useParams } from 'react-router-dom';
import { AddChat } from './AddChat';
import { useDispatch, useSelector } from 'react-redux';
import { delChat, sendMessage } from './store/chats/actions';
import { selectChats } from './store/chats/selectors';

export function Home() {
  const { chatId } = useParams();

  const chats = useSelector(selectChats);
  const dispatch = useDispatch();

  const handleSendMessage = useCallback((newMessages) => {
  dispatch(sendMessage(chatId, newMessages));
  }, [chatId]);

  const deleteChat = useCallback ((id)=>{
    dispatch(delChat(id));
  },[]);
 
  useEffect(() => {

    if (!chats[chatId] && !!chatId) {
      return <Redirect to="/nochat" />;
    }

    if (!chatId &&
      !chats.[chatId]?.messages.length ||
      chats.[chatId].messages[chats.[chatId].messages.length - 1].author === "Bot") {
      return;
    }

    const timeout = setTimeout(() => {
      const newMessage = {
        text: "I am a robot",
        author: "Bot",
        id: Date.now(),
      }
      handleSendMessage(newMessage);
    }, 700);

    return () => clearTimeout(timeout);

  }, [chats]);

  if (!chats[chatId] && !!chatId) {
    return <Redirect to="/nochat" />;
  }

  return (
    <div className="chat">
      <List className="chat__list">
        {Object.values(chats).map((name) => (
        <ListItemChat name={name.name} id={name.id} key={name.id} onDelete={deleteChat}/>)
        )}
        <ListItem>
          <AddChat />
        </ListItem>
      </List>
      {!!chatId && <div className="form">
        <MessageList messages={chats[chatId].messages} />
        <Form onSendMessage={handleSendMessage} />
      </div>}
    </div>
  );



}


