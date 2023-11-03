import { IUser } from "../../types/userType";
import { setAuthToken } from "../../libs/Api";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IUser = {
  id: 0,
  userName: "",
  fullName: "",
  email: "",
  profile_picture: "",  // Pastikan ini adalah URL gambar yang valid
  profile_desc: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    AUTH_LOGIN: (_, action) => {
      const payload = action.payload;
      console.log(payload);
      setAuthToken(payload.token);
      localStorage.setItem("token", payload.token);

      const user: IUser = {
        id: payload.id,
        userName: payload.userName,
        fullName: payload.fullName,
        email: payload.email,
        profile_picture: payload.profile_picture,  // Pastikan ini adalah URL gambar yang valid
        profile_desc: payload.profile_desc,
      };

      return user;
    },
    AUTH_CHECK: (_, action) => {
      const payload = action.payload;

      const user: IUser = {
        id: payload.id,
        userName: payload.userName,
        fullName: payload.fullName,
        email: payload.email,
        profile_picture: payload.profile_picture,  // Pastikan ini adalah URL gambar yang valid
        profile_desc: payload.profile_desc,
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
