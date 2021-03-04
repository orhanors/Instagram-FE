import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	initialState: false,
	name: "refresh",
	reducers: {
		setRefreshTrue: (state, action) => true,
		setRefreshFalse: (state, action) => false,
	},
});

export const { setRefreshFalse, setRefreshTrue } = slice.actions;

export default slice.reducer;
