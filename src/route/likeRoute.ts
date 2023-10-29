import * as express from "express"
import likeController from "../controllers/Like";

const likeRouter = express.Router();

likeRouter.get("/likes", likeController.find)
likeRouter.post("/like", likeController.like)

export default likeRouter;