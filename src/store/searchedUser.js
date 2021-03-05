import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiCall } from "./api";

const initialState = {
	data: {},
	errorMessage: "",
	loading: false,
};

const slice = createSlice({
	name: "searchedUser",
	initialState,
	reducers: {
		requested: (state) => ({
			...state,
			loading: true,
		}),
		searchUserSuccess: (state, action) => ({
			...state,
			loading: false,

			data: action.payload,
		}),

		removeSearchedUser: (state, action) => ({
			...state,
			loading: false,

			data: {},
		}),

		searchUserFailed: (state, action) => ({
			...state,
			loading: false,
			errorMessage: action.payload,
		}),
	},
});

export const {
	requested,
	searchUserSuccess,
	searchUserFailed,
	removeSearchedUser,
} = slice.actions;

export default slice.reducer;

export const getSearchedUser = (username) =>
	apiCall({
		url: `${process.env.REACT_APP_BE_URL}/users/user/${username}`,
		onStart: requested.type,
		onSuccess: searchUserSuccess.type,
		onError: searchUserFailed.type,
	});
