import * as express from "express"
import UserController from "../controllers/user";


const router = express.Router();

router.get("/users", UserController.find)
router.get("/user", UserController.sugestedUsers)
router.post("/user", UserController.create)
router.patch("/user/:id", UserController.update)
router.delete("/user/:id", UserController.delete)

export default router;