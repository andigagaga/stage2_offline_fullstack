import { AppDataSource } from "./data-source";
import * as express from "express";
import { Request, Response } from "express";
import threadRouter from "./route/threadsRoute";
import userRouter from "./route/usersRoute";


AppDataSource.initialize()
    .then(async () => {
        const app = express();
        const port = 5000;

        app.use(express.json());
        app.use("/api/v1", threadRouter);
        app.use("/api/v1", userRouter);

        app.get("/", (req: Request, res: Response) => {
            res.send("Guswandi");
        });

        app.listen(port, () => {
            console.log(`servesr is running on https localhost:${port}`);
        });
    })
    .catch((error) => console.log(error));
