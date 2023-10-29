export type IThreadPost = {
  id: number;
	content: string;
	image: string;
	user: {
		userName: string;
		fullName: string;
		profile_picture: string;
	};
};
