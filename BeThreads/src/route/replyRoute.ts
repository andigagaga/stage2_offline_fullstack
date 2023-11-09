import * as express from "express"
import replyController from "../controllers/Reply";
import { authenticate } from "../middlewares/Auth";

const replyRouter = express.Router();

replyRouter.post("/reply/:id/",authenticate, replyController.create)
// replyRouter.get("/reply/:id", replyController.findOne)

export default replyRouter;