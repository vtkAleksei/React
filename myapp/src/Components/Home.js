import './Components_style/Home.css';
import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { MessageList } from './MessageList';
import { Form } from './Form';
import { List } from '@material-ui/core';
import { ListItem, Button } from '@material-ui/core';
import { Link, Redirect, useParams } from 'react-router-dom';


const initialChats = {
  chat1: {
    id: "chat1",
    name: "Chat_1",
    messages: [{ text: "Welcome in chat 1", author: "Bot", id: "Chat1-1" }],
  },
  chat2: {
    id: "chat2",
    name: "Chat_2",
    messages: [{ text: "Welcome in chat 2", author: "Bot", id: "Chat2-1" }],
  },
  chat3: {
    id: "chat3",
    name: "Chat_3",
    messages: [{ text: "Welcome in chat 3", author: "Bot", id: "Chat3-1" }],
  },
  chat4: {
    id: "chat4",
    name: "Chat_4",
    messages: [{ text: "Welcome in chat 4", author: "Bot", id: "Chat4-1" }],
  },
}

export function Home() {
  const { chatId } = useParams();
  console.log(chatId);

  const [chats, setChats] = useState(initialChats);

  const handleSendMessage = useCallback((newMessages) => {
    console.log("handleSendMessage----", chatId);

    setChats({
      ...chats,
      [chatId]: {
        ...chats[chatId],
        messages: [...chats[chatId].messages, newMessages],
      }
    });
  }, [chats]);
 
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
        {Object.values(chats).map(function renderListChat(name) {
          return (
            <ListItem className="chat__listItem" key={name.id}>
              <Link to={`/home/${name.id}`}>{name.name}</Link>
            </ListItem>
          );
        })}
      </List>
      {!!chatId && <div className="form">
        <MessageList messages={chats[chatId].messages} />
        <Form onSendMessage={handleSendMessage} />
      </div>}
    </div>
  );



}


