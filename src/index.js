import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';
import counter from './reducers/counter';
import { Provider } from 'react-redux';
import { Root } from './components/Root';

let logApplicationState = store => next => action => {
  console.log('dispatching:', action);
  let result = next(action);
  console.log('Updated State:', JSON.stringify(store.getState(), null, 2));
};
let store = createStore(counter, applyMiddleware(logApplicationState));
ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
