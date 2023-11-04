// import * as express from "express"
// import likeController from "../controllers/Like";

// const likeRouter = express.Router();

// likeRouter.get("/likes", likeController.find)
// likeRouter.post("/like", likeController.like)

// export default likeRouter;

import * as express from "express"
import likeController from "../controllers/Like";
import { authenticate } from "../middlewares/Auth";

const likeRouter = express.Router();

likeRouter.get("/likes", likeController.find)
likeRouter.post("/like/:id/",authenticate, likeController.like)

export default likeRouter;