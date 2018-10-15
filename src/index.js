import React from 'react';
import { unstable_createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configure/configureStore';
import App from './App';

const store = configureStore();

// 새로 만들어진 Root 랜더 메소드.
const root = document.getElementById('root');
unstable_createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
