import { combineReducers } from "@reduxjs/toolkit";

import refreshReducer from "../refresh";
import userReducer from "../user";
import searchedUserReducer from "../searchedUser";
const rootReducer = combineReducers({
	user: userReducer,
	refresh: refreshReducer,
	searchedUser: searchedUserReducer,
});

export default rootReducer;
