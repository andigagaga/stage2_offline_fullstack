import { EventEmitter } from "stream";
import { AppDataSource } from "../data-source";
import { Threads } from "../entities/Thread";
// import * as amqp from "amqplib";
import { Repository } from "typeorm";
import CloudinaryConfig from "../libs/cloudinary";
// import { log } from "console";

export default new class ThreadWorker {
    private readonly ThreadRepository: Repository<Threads> =
        AppDataSource.getRepository(Threads);
    // private emiiter = new EventEmitter();

    async create(queueName: string, connection: any) {
        try {
            const channel = await connection.createChannel();
            await channel.assertQueue(queueName);
            await channel.consume(queueName, async (message:any) => {
                try {
                    if (message !== null) {
                        const payload = JSON.parse(message.content.toString());

                        const cloudinaryResponse = await CloudinaryConfig.destination(
                            payload.image
                        );

                        const thread = this.ThreadRepository.create({
                            content: payload.content,
                            image: cloudinaryResponse,
                            users: {
                                id: payload.users,
                            },
                        });
                        console.log(thread);
                        

                        
                        
                        const threadResponse = await this.ThreadRepository.save(thread);
                        console.log(threadResponse);

                        // this.emiiter.emit("message");
                        console.log("(worker): thread is create");

                        channel.ack(message);
                    }
                } catch (error) {
                    console.log("(worker): thread error: " + error);
                }
            });
        } catch (error) {
            console.log("(worker): thread error failed consume queue");
        }
    }
}



// import * as amqp from "amqplib"
// import { Repository } from "typeorm"
// import { Threads } from "../entities/Thread"
// import { AppDataSource } from "../data-source"
// import { EventEmitter } from "stream"
// import cloudinary from "../libs/cloudinary"

// export default new class ThreadWorker{
//   private readonly ThreadRepository: Repository<Threads> = AppDataSource.getRepository(Threads)
//   private emitter = new EventEmitter()

//   async create(queueName: string, connection: any) {
//     try {
//       const channel = await connection.createChannel()
//       await channel.assertQueue(queueName)
//       await channel.consume(queueName, async (message) => {
//         try {
//           if(message !== null) {
//             const payload = JSON.parse(message.content.toString())
  
//             const cloudinaryResponse = await cloudinary.destination(payload.image)
  
//             const thread = this.ThreadRepository.create({
//               content: payload.content,
//               image: cloudinaryResponse,
//               users: {
//                 id: payload.user
//               }
//             })
  
//             const threadResponse = await this.ThreadRepository.save(thread)
  
//             this.emitter.emit("message")
//             console.log("(Worker) : Thread is create", threadResponse);
            
//             channel.ack(message)
//           }
//         } catch (err) {
//           console.log("(Worker) : Thread is failed");
//         }
//       })
//     } catch (err) {
//       console.log("(Worker) : Error while consume queue from thread");
//     }
//   }
// }