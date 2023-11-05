// import { ThreadLikeType } from "./like";

export type IThreadCard = {
  id: number;
	content: string;
	image: string;
	posted_at: string;
	users: {
		id: number
		userName: string;
		fullName: string;
		profile_picture: string;
	};
	likes:[];
	replies: []; 
};

export type IThreadsPost = {
	content: string;
	image:Blob | string | null;
  };
  
