import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";
import thunk from "redux-thunk";
import { messagesReducer } from "./messages/reducer";
import { pecturesReducer } from "./pictures/reducer";

const persistConfig = {
  key: "GB-messenger",
  storage,
};

const rootReducer = combineReducers({
  chats: chatsReducer,
  profile: profileReducer,
  messages: messagesReducer,
  pictures: pecturesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

