let initialState = { count: 0 };

function reducer(state = initialState, action) {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1
    };
  }
  if (action.type === "RESET") {
    return {
      count: (state.count = 0)
    };
  }

  return state;
}

export default reducer;
