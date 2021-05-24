import { combineReducers } from "redux";
import { fetchDataReducer } from "./fetch/reducer";

export const rootReducer = combineReducers({
  fetchDataReducer,
});
