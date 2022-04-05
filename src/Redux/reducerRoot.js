/** @format */

import { combineReducers } from "redux";
import reducer from "./reducer.js";

const rootReducer = combineReducers({
  data: reducer,
});

export default rootReducer;
