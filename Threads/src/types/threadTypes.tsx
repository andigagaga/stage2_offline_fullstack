export type IThreadPost = {
  id?: number;
	content?: string;
	image?: string;
	users?: {
		userName?: string;
		fullName?: string;
		profile_picture?: string;
	};
};
