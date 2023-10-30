import { Request, Response } from "express";
import { CreateThreadSchema } from "../utils/validator/Joi";
import messageQueue from "../libs/rabbitMq";

type QueuePayload = {
    content: string;
    image: string;
    user: number;
};

export default new (class threadQueue {
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
                user: loginSession.user.id,
            };

            const errorQueue = await messageQueue.messageSend(process.env.THREAD, payload);
            if (errorQueue) return res.status(500).json({message: `something error while sending message queue ${errorQueue}`});

            return res.status(201).json({ 
                message: "thread create success!",
                payload
            });
        } catch (error) { 
            console.log(error);
            return res.status(500).json({ message: "error in threadqueue method" });
            
        }
    }
})();
