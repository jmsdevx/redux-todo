import { createStore, combineReducers } from "redux";
import filterReducer from "./reducers/filterReducer";
import taskReducer from "./reducers/taskReducer";
import inputReducer from "./reducers/inputReducer";

const store = createStore(
  combineReducers({ taskReducer, inputReducer, filterReducer })
);

export default store;
