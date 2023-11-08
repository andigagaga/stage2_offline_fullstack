import { authSlice } from "./Slice/authSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const { AUTH_CHECK, AUTH_ERROR, AUTH_LOGOUT } =
	authSlice.actions;

export const authReducer = authSlice.reducer;

const RootReducer = combineReducers({
	auth: authSlice.reducer,
});

export default RootReducer;