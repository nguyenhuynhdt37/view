import { combineReducers } from "@reduxjs/toolkit";
import  countReducer  from "./slices/count";
export const rootReducer = combineReducers({
  count: countReducer
});
