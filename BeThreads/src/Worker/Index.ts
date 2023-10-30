import * as amqp from "amqplib"
import "dotenv/config";
import { AppDataSource } from "../data-source";
import cloudinary from "../libs/cloudinary";
import ThreadWorker from "./ThreadWorker";

export default class workerHub {
    constructor() {
        AppDataSource.initialize()
        .then(async () => {
            cloudinary.upload()

            const connection = await amqp.connect(process.env.RABBIT_MQ)

            const response = await ThreadWorker.create(process.env.THREAD, connection)
            console.log(response);
            
        })
        .catch((error) => console.log(error))
    }
}
