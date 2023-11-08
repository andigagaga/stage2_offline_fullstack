import { IProfile } from "../../types/userType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IProfile = {
  user: {
    id: 0,
    email: "",
    fullName: "",
    profile_desc: "",
    profile_picture: "",
    userName: "",
  },
  followings: [],
  followers: [],
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
   
    AUTH_CHECK: (_, action) => {
      const payload = action.payload;
      
      const user: IProfile = {
        user: {
          email: payload.user.email,
          fullName: payload.user.fullName,
          id: payload.user.id,
          profile_desc: payload.user.profile_desc,
          profile_picture: payload.user.profile_picture,
          userName: payload.user.userName,
        },
        followings: payload.followings,
        followers: payload.followers,
        message: "",
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
