import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainApp from '../App';
import { Provider } from 'react-redux';
import React from "react";
import RandomComponent from './RandomComponent';

export const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Route path="/:param" component={MainApp} exact/>
      <Route path="/home/:something" component={RandomComponent} exact/>
    </Router>
  </Provider>
);
