import { Request, Response } from "express";
import { CreateThreadSchema } from "../utils/validator/Joi";
import MessageQueue from "../libs/rabbitMq";
import "dotenv/config";

type QueuePayload = {
    content: string;
    image: string;
    users: number;
};

export default new class threadQueue {
    async create(req: Request, res: Response) {
        try {
            const loginSession: any = res.locals.loginSession;
            

            const data = {
                content: req.body.content,
                image: res.locals.filename,
            };

            const { error, value } = CreateThreadSchema.validate(data);
            if (error) return res.status(400).json({ error });
            

            const payload: QueuePayload = {
                content: value.content,
                image: value.image,
                users: loginSession.user.id,
            };

            const errorQueue = await MessageQueue.MessageSend("threads-queue", payload);
            if (errorQueue) return res.status(500).json({message: `something error while sending message queue ${errorQueue}`});

            return res.status(201).json({ 
                message: "thread create success!",
                payload
            });
        } catch (error) { 
            return res.status(500).json({ message: "error in threadqueue method" });
            
        }
    }
}
