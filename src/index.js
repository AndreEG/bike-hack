import React from 'react';
import ReactDOM from 'react-dom';

/* import { createStore } from 'redux'; */
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app';



const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  
    <App />
  
  , document.getElementById('root'))
