import { Request, Response } from "express";
import FollowingServices from "../services/Following";

class followingController{
    findFollowing(req: Request, res:Response) {
        FollowingServices.findFollowing(req,res)
    }

    createFollowing(req: Request, res:Response) {
        FollowingServices.createFollowing(req,res)
    }

    deletedFollowing(req: Request, res:Response) {
        FollowingServices.deletedFollowing(req,res)
    }
}
export default new followingController;