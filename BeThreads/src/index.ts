import { AppDataSource } from "./data-source";
import * as express from "express";
import { Request, Response } from "express";
import threadRouter from "./route/threadsRoute";
import userRouter from "./route/usersRoute";
import replyRouter from "./route/replyRoute";
import likeRouter from "./route/likeRoute";
// import followerRouter from "./route/Follower";
// import followingRouter from "./route/Following";
// import followingRouter from "./route/Following";
import AuthRoutes from "./route/Auth";
import * as cors from "cors";
import "dotenv/config"

AppDataSource.initialize()
    .then(async () => {
        const app = express();
        const port = 5000;        
        
        app.use(cors());
        app.use(express.json());
        app.get("/", (req: Request, res: Response) => {
            res.send("Guswandi");
        });
        app.use("/api/v1", threadRouter);
        app.use("/api/v1", userRouter);
        app.use("/api/v1", replyRouter);
        app.use("/api/v1", likeRouter);
        // app.use("/api/v1", followerRouter);
        // app.use("/api/v1",followingRouter);
        app.use("/api/v1", AuthRoutes)

        app.listen(port, () => {
            console.log(`servesr is running on https localhost:${port}`);
        });
    })
    .catch((error) => console.log(error));
