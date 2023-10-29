import * as express from "express"
import replyController from "../controllers/Reply";

const replyRouter = express.Router();

replyRouter.get("/replys", replyController.find)
replyRouter.post("/reply", replyController.create)
replyRouter.get("/reply/:id", replyController.findOne)

export default replyRouter;