export let increment = dispatch => {
  dispatch({ type: 'INCREMENT_START'})
  return new Promise((resolve, reject) => {
    setTimeout(_ => {
      dispatch({ type: 'INCREMENT_SUCCESS'});
      resolve()
    }, 1500);
  })
}
export let decrement = dispatch => dispatch({ type: 'DECREMENT'})