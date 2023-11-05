import { IUser } from "./userType"

export type ThreadLikeType = {
    id: number;
    created_at: string
    users: IUser;
}