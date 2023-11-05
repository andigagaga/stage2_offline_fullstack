import * as amqp from "amqplib"
import "dotenv/config";
import { AppDataSource } from "../data-source";
import CloudinaryConfig from "../libs/cloudinary";
import ThreadWorker from "./ThreadWorker";

export default new class WorkerHub {
    constructor() {
        AppDataSource.initialize()
        .then(async () => {
            CloudinaryConfig.upload()

            const connection = await amqp.connect("amqp://localhost")

            const response = await ThreadWorker.create("threads-queue", connection)
            
        })
        .catch((error) => console.log(error))
    }
}