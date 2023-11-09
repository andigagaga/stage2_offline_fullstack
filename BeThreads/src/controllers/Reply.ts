import { Request, Response } from "express";
import replyServices from "../services/reply";


class replyController {
    create(req:Request, res: Response) {
        replyServices.create(req, res)
    }

}

export default new replyController;