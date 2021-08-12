import { ADD_CHAT, DEL_CHAT, SEND_MESSAGE } from "./actionTypes";

export const addChat = (chatId, name) => ({
    type: ADD_CHAT,
    payload: {
        chatId,
        name,    
    }
});

export const delChat = (chatId) => ({
    type: DEL_CHAT,
    payload: chatId,
});

export const sendMessage = (chatId, message) => ({
    type: SEND_MESSAGE,
    payload: {
        chatId,
        message,    
    }
});

