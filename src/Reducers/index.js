import { combineReducers } from "redux";
import AuthReducer from "./Auth.Reducer";
import Counter_Reducer from "./Counter";
import isLogged from "./IsLogged";
import Medicine_Reducer from "./Medicine_Reducer";

const all_reducers = combineReducers({
  counter: Counter_Reducer,
  ISLogged: isLogged,
  medicine: Medicine_Reducer,
  AuthReducer: AuthReducer
});

export default all_reducers;
