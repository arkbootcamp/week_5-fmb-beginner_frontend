import { combineReducers } from "redux";
import counterReducer from "./counter";
import nameReducer from "./name";

//menggabungkan beberapa reducer
const indexReducer = combineReducers({
  //key: value
  //key => pemanggilan
  //value => reducer
  counter: counterReducer,
  name: nameReducer,
});

export default indexReducer;
