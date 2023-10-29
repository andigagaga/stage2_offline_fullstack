import * as express from "express"
import FollowingController from "../controllers/Following";

const followingRouter = express.Router();

followingRouter.get("/followings", FollowingController.findFollowing)
followingRouter.post("/following", FollowingController.createFollowing)
followingRouter.delete("/following/:id", FollowingController.deletedFollowing)

export default followingRouter;