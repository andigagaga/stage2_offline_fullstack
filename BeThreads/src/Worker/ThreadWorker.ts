import { EventEmitter } from "stream";
import { AppDataSource } from "../data-source";
import { Threads } from "../entities/Thread";
import { Repository } from "typeorm";
import CloudinaryConfig from "../libs/cloudinary";
import { request } from "http";

export default new class ThreadWorker {
    private readonly ThreadRepository: Repository<Threads> =
        AppDataSource.getRepository(Threads);


    private emtter = new EventEmitter();
    async create(queueName: string, connection: any) {
        try {
            const channel = await connection.createChannel();
            await channel.assertQueue(queueName);
            await channel.consume(queueName, async (message:any) => {
                try {
                    if (message !== null) {
                        const payload = JSON.parse(message.content.toString());

                        const cloudinaryResponse = payload.image? await CloudinaryConfig.destination(
                            payload.image
                        ) : ""

                        const thread = this.ThreadRepository.create({
                            content: payload.content,
                            image: cloudinaryResponse,
                            users: {
                                id: payload.users,
                            },
                        });
                        

                        
                        
                        const threadResponse = await this.ThreadRepository.save(thread);
                        console.log(threadResponse);

                        const req = request({
                            hostname: "localhost",
                            port: 5000,
                            path: "/api/v1/thread",
                            method: "GET",
                        })

                        req.on("error", (err) => {
                            console.log("error sending request", err);
                            
                        })

                        console.log("sending request");
                        req.end()
                        
                        this.emtter.emit("message");
                        console.log("(worker): thread is create");
                        channel.ack(message)
                        
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