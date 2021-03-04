import { combineReducers } from "@reduxjs/toolkit";
import refreshReducer from "../refresh"
import userReducer from "../user";
const rootReducer = combineReducers({
	user: userReducer,
	refresh:refreshReducer,
});

export default rootReducer;
