import { db } from "../../services/firebase";
import { SET_MESSAGES } from "./actionTypes";
import { SET_ERROR } from "../messages/actionTypes";

const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: messages,
});

const setError = (messages) => ({
  type: SET_ERROR,
  payload: messages,
});

export const connectMessagesToFB = () => (dispatch) => {
  try {
    db.ref("messages").off();
    db.ref("messages").on("value", (snapshot) => {
      let newMessages = {};
      if (!snapshot) {
        return;
      }
      snapshot.forEach((snap) => {
        const currentMsgs = snap.val();
        if (newMessages[snap.key]) {
          newMessages[snap.key].concat(Object.values(currentMsgs));
        } else {
          newMessages[snap.key] = Object.values(currentMsgs);
        }
      });

      dispatch(setMessages(newMessages));
    });
  } catch (e) {
    dispatch(setError(e.message));
  }
};

export const sendMessageWithFB = (chatId, message) => (dispatch) => {
  try {
    db.ref("messages")
      .child(chatId)
      .push({
        ...message,
        id: `${chatId}-${Date.now()}`,
        chatId,
      });
  } catch (e) {
    dispatch(setError(e));
  }
};
