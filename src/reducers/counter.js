import { combineReducers } from "redux";

// let initialState = {
//   counter: 0,
//   actionTypes: []
// };
let actionList = (state = [], action) => {
  let newState = [...state];
  switch (action.type) {
    case 'INCREMENT':
      newState.push(action.type);
      return newState;
    case 'DECREMENT':
      newState.push(action.type);
      return newState;
  
    default:
      return state;
  }
}
let counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      state += 1
      return state;
    case 'DECREMENT':
      state -= 1;
      return state;
  
    default:
      return state;
  }
}
export default combineReducers({
  actionList,
  counter
})