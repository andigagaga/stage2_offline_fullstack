import { Request, Response } from "express";
import replyServices from "../services/reply";
class replyController {
    find(req:Request, res: Response) {
        replyServices.find(req, res)
    }

    create(req:Request, res: Response) {
        replyServices.create(req, res)
    }

    findOne(req:Request, res: Response) {
        replyServices.findOne(req, res)
    }
}

export default new replyController;