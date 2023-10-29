import { Request, Response } from "express";
import FollowerServices from "../services/Follower";

class followerController {
    findFollower(req: Request, res: Response) {
        FollowerServices.findFollower(req, res)
    }

    createFollower(req: Request, res: Response) {
        FollowerServices.createFollower(req, res)
    }

    deletedFollower(req: Request, res: Response) {
        FollowerServices.deletedFollower(req, res)
    }
}
export default new followerController;