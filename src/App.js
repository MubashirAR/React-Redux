import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { decrement, increment } from './actions/counter';
import { NavLink } from 'react-router-dom';

function App(props) {
  let { increment, decrement, isLoading, param } = props;
  return (
    <div className="App">
      <header className="App-header">
        {isLoading ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <Fragment>
            <p>
              Param is: {param}
              <br />
              {props.list.toString()}
              <br />
              {props.count}
              <br />
              <button onClick={increment}>Increment</button>
              <button onClick={decrement}>Decrement</button>
              <br />
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
            <NavLink exact to={'/home/anything'} className="App-link">
              Go somewhere
            </NavLink>
          </Fragment>
        )}
      </header>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    list: state.actionList,
    count: state.counter,
    isLoading: state.isLoading,
    param: ownProps.match.params.param
  };
};
const mapDispatchToProps = dispatch => {
  return {
    increment: () => increment(dispatch),
    decrement: () => decrement(dispatch),
  };
};
const MainApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default MainApp;
