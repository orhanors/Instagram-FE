import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import api from "../middlewares/api";
import rootReducer from "./reducer";
const middleware = [...getDefaultMiddleware(), api];

const store = configureStore({
	reducer: rootReducer,
	middleware,
});

export default store;
