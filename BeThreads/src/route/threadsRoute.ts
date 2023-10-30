import * as express from "express";
import ThreadController from "../controllers/thread";
import { authenticate } from "../middlewares/Auth";
import upload from "../middlewares/UploadsImage";

const router = express.Router();

router.get("/threads", authenticate, ThreadController.find);
// router.post("/thread", authenticate,upload.single("image"),ThreadController.create)
router.post(
  "/thread",
  authenticate,
  upload.single("image"),
  ThreadController.create
);
router.patch("/thread/:id", ThreadController.update);
router.delete("/thread/:id", ThreadController.delete);

export default router;
