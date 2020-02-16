import { combineReducers } from "redux";

// let initialState = {
//   counter: 0,
//   actionTypes: []
// };
let actionList = (state = [], action) => {
  let newState = [...state];
  switch (action.type) {
      case 'INCREMENT_SUCCESS':
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
    case 'INCREMENT_SUCCESS':
      state += 1
      return state;
    case 'DECREMENT':
      state -= 1;
      return state;
  
    default:
      return state;
  }
}
let isLoading = (state = false, action) => {
  switch (action.type) {
    case 'INCREMENT_START':
      return true;
    case 'INCREMENT_SUCCESS':
      return false;
  
    default:
      return state;
  }
}
export default combineReducers({
  actionList,
  isLoading,
  counter
})