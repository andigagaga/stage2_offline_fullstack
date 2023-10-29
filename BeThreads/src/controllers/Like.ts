import { Request, Response } from "express";
import likesServices from "../services/Likes";

class likeController {
    find(req: Request, res: Response) {
        likesServices.find(req, res)
    }

    like(req: Request, res: Response) {
        likesServices.like(req, res)
    }
}

export default new likeController;