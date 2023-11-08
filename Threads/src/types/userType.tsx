export type IUser = {
    id: number;
    userName: string;
    fullName: string;
    email: string;
    profile_picture: string;
	profile_desc: string;
}

export type IUserRegister = {
	fullName: string;
	userName: string;
	email: string;
	password: string;
};

export type IUserlogin = {
	email: string;
	password: string;
};

export interface IProfile {
	user: IUser;
	followings: [];
	followers: [];
	message: string;
  }

export type IFollow = {
	fullName: string;
	id: number;
	profile_picture: string;
	userName: string;
}