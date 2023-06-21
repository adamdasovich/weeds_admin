import { createSlice } from '@reduxjs/toolkit';


const userRedux = createSlice({
	name: 'user',
	initialState: {
		currentUser: null,
		isFetching: false,
		error: false,
	},
	reducers: {
		loginStart: (state) => {
			state.isFetching = true;
		},
		loginSuccess: (state, action) => {
			state.currentUser = action.payload;
			state.isFetching = false;
			state.error = false;
		},
		loginFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const {
	loginStart,
	loginSuccess,
	loginFailure,
} = userRedux.actions;

export default userRedux.reducer;
