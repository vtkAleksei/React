import { ADD_CHAT, DEL_CHAT, SEND_MESSAGE } from "./actionTypes"

const initialState = {
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

export const chatsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_CHAT: {
            return {
                ...state,
                [payload.chatId]: {
                    name: payload.name,
                    id: payload.chatId,
                    messages: [{ text: `Welcome in chat ${payload.chatId}`, author: "Bot", id: `Chat${payload.chatId}-1` }],
                },
            };
        }

        case DEL_CHAT: {
            const newState = {...state};
            delete newState[payload];

            return newState
        }

        case SEND_MESSAGE: {
            return {
                ...state,
                [payload.chatId]: {
                    ...state[payload.chatId],
                    messages: [...state[payload.chatId].messages, payload.message],
                },
            };
        }

        default:
            return state;
    }
}