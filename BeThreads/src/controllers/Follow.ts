import type { Request, Response } from "express";
import FollowingServices from "../services/Follower";


export default new (class FollowController {
    follow(req: Request, res: Response) {
        FollowingServices.follow(req, res)
    }
})