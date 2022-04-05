/** @format */

import { combineReducers } from "redux";
import reducer from "./reducer";

const ReducerRoot = combineReducers({
  data: reducer,
});
export default ReducerRoot;
