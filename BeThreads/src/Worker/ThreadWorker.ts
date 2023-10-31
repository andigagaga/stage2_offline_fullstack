import { EventEmitter } from "stream";
import { AppDataSource } from "../data-source";
import { Threads } from "../entities/Thread";
// import * as amqp from "amqplib";
import { Repository } from "typeorm";
import cloudinary from "../libs/cloudinary";
// import { log } from "console";

export default new (class ThreadWolker {
    private readonly threadRepository: Repository<Threads> =
        AppDataSource.getRepository(Threads);
    private emiiter = new EventEmitter();

    async create(queueName: string, connection: any) {
        try {
            const channel = await connection.createChannel();
            await channel.assertQueue(queueName);
            await channel.consume(queueName, async (message) => {
                try {
                    if (message !== null) {
                        const payload = JSON.parse(message.content.toString());

                        const cloudinaryResponse = await cloudinary.destination(
                            payload.image
                        );

                        const thread = this.threadRepository.create({
                            content: payload.content,
                            image: cloudinaryResponse,
                            users: {
                                id: payload.id,
                            },
                        });

                        const threadResponse = await this.threadRepository.save(thread);
                        console.log(threadResponse);
                        

                        this.emiiter.emit("message");
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
})();
