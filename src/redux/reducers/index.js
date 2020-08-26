import { combineReducers } from "redux";
import counterReducer from "./counter";
import nameReducer from "./name";
import asyncAPIReducer from "./asyncAPI";

//menggabungkan beberapa reducer
const indexReducer = combineReducers({
  //key: value
  //key => pemanggilan
  //value => reducer
  counter: counterReducer,
  name: nameReducer,
  asyncAPI: asyncAPIReducer,
});

export default indexReducer;
