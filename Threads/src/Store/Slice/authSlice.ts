// import { seAuthToken } from "@/libs/api";
// import { IUser } from "@/types/User";
import { IUser } from "../../types/userType";
import { setAuthToken } from "../../libs/Api";
import { createSlice } from "@reduxjs/toolkit";

const initiaslState: IUser = {
	id: 0,
	fullName: "",
	userName: "",
	email: "",
	profile_picture: "",
};

export const authSlice = createSlice({
	name: "auth",
	initialState: initiaslState,
	reducers: {
		AUTH_LOGIN: (_, action) => {
			const payload = action.payload;
			console.log(payload);
			setAuthToken(payload.token);
			localStorage.setItem("token", payload.token);

			const user: IUser = {
				id: payload.id,
				fullName: payload.full_name,
				userName: payload.username,
				email: payload.email,
				profile_picture: payload.picture,
			};

			return user;
		},
		AUTH_CHECK: (_, action) => {
			const payload = action.payload;

			const user: IUser = {
				id: payload.id,
				fullName: payload.full_name,
				userName: payload.username,
				email: payload.email,
				profile_picture: payload.picture,
			};

			return user;
		},
		AUTH_ERROR: () => {
			localStorage.removeItem("token");
		},
		AUTH_LOGOUT: () => {
			localStorage.removeItem("token");
		},
	},
});