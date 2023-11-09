import { Request, Response } from "express";
import ThreadServices from "../services/thread";
import ThreadQueue from "../queue/ThreadQueue";

class ThreadController {
    find(req: Request, res: Response) {
        ThreadServices.find(req, res)
    }

    findOne(req: Request, res: Response) {
        ThreadServices.findOne(req, res)
    }

    create(req: Request, res: Response) {
        ThreadQueue.create(req, res)
    }

    update(req: Request, res: Response) {
        ThreadServices.update(req, res)
    }
    delete(req: Request, res: Response) {
        ThreadServices.delete(req, res)
    }
}

export default new ThreadController;