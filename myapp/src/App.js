import './App.css';
import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { MessageList } from './Components/MessageList';
import { Form } from './Components/Form';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';

function App() {
  const [messages, setMessages] = useState([]);
  const listChat = [{ id: 1, name: "Chat_1" }, { id: 2, name: "Chat_2" }, { id: 3, name: "Chat_3" }, { id: 4, name: "Chat_4" },];

  const handleSendMessage = useCallback((newMessages) => {
    setMessages([...messages, newMessages]);
  }, [messages]);

  useEffect(() => {
    if (!messages.length || messages[messages.length - 1].author === "Bot") {
      return;
    }

    const timeout = setTimeout(() => {
      const newMessage = {
        text: "I am a robot",
        author: "Bot",
        id: Date.now(),
      }
      setMessages([...messages, newMessage]);
    }, 700);

    return () => clearTimeout(timeout);

  }, [messages]);



  return (
    <div className="chat">
      <List className="chat__list">
        {listChat.map(function renderListChat(name) {
          return (
            <ListItem className="chat__listItem" button="true" divider="true" children={name.name}></ListItem>
          );
        })}
      </List>
      <div className="form">
        <MessageList messages={messages} />
        <Form onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;
