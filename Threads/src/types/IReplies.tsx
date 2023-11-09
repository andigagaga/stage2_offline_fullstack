import { IUser } from "./userType";

export type IReplies = {
    id: number;
    created_at: string;
    users: IUser;
    content: string;
    likes_count: number;
    image: string;
}