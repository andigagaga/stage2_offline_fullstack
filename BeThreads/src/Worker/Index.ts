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


// import * as amqp from "amqplib"
// import "dotenv/config"
// import { AppDataSource } from "../data-source"
// import cloudinary from "../libs/cloudinary"
// import ThreadWorker from "./ThreadWorker"

// export default new class WorkerHub {
//   constructor() {
//     AppDataSource.initialize()
//       .then(async () => {
//         cloudinary.upload()

//         const connection = await amqp.connect(process.env.RABBIT_MQ)

//         // create worker anymore
//         const resp = await ThreadWorker.create(process.env.THREAD, connection)
//         console.log(resp)
//       })
//       .catch((err) => console.log(err))
//   }
// }