const initialState = { task: "" };

const HANDLE_INPUT = "HANDLE_INPUT";

function inputReducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case HANDLE_INPUT:
      return {
        ...action.payload
      };
    default:
      return state;
  }
}

export default inputReducer;
