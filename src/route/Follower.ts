import * as express from "express"
import Follower from "../controllers/Follower"

const followerRouter = express.Router()

followerRouter.get("/followers", Follower.findFollower)
followerRouter.post("/follower", Follower.createFollower)
followerRouter.delete("/follower/:id", Follower.deletedFollower)

export default followerRouter;