import React from 'react';
import { Router } from './Components/Router';
import { store } from './Components/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
