export type IThreadCard = {
  id?: number;
	content?: string;
	image?: string;
	users?: {
		userName?: string;
		fullName?: string;
		profile_picture?: string;
	};
};

export type IThreadsPost = {
	content: string;
	image:Blob | string | null;
  };
  
