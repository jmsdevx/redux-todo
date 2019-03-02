const initialState = { list: [] };

const ADD_TASK = "ADD_TASK";

function taskReducer(state = initialState, action) {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case ADD_TASK:
      return {
        list: [...state.list, action.payload]
      };
    default:
      return state;
  }
}

export default taskReducer;
