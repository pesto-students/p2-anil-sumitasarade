let initialState = { isLightOn: true };

function reducer(state = initialState, action) {
  if (action.type === "FLIP_LIGHT") {
    return {
      isLightOn: !state.isLightOn
    };
  }
  return state;
}

export default reducer;
