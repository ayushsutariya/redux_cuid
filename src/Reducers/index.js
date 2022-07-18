import { combineReducers } from "redux";
import Counter_Reducer from "./Counter";
import isLogged from "./IsLogged";
import Medicine_Reducer from "./Medicine_Reducer";

const all_reducers = combineReducers({
  counter: Counter_Reducer,
  ISLogged: isLogged,
  medicine: Medicine_Reducer
});

export default all_reducers;
