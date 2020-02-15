import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { decrement, increment } from './actions/counter';

// store.subscribe(() => console.log(store.getState()));

// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(increment());
// store.dispatch(decrement());
function App(props) {
  let { increment, decrement } = props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {props.list.toString()}
          <br/>
          {props.count}
          <br/>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <br/>
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}
const mapStateToProps = state => {
  console.log({state})
  return {
    list: state.actionList,
    count: state.counter
  };
};
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};
const MainApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default MainApp;
