// reducers/rootReducer.js

import { combineReducers } from "redux";

import authReducer from "./authReducer";

const rootReducer = combineReducers({
  authen: authReducer,
});

export default rootReducer;
