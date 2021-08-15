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

export const sendMessageWithReply = (chatId,message) => (dispatch) => {
    dispatch(sendMessage(chatId, message));

    setTimeout(()=>{
        dispatch(
            sendMessage(chatId, {text:"I am a robot", author: "Bot"})
        );
    },700);
}

