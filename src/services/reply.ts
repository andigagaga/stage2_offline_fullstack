import { Repository } from "typeorm";
// import { reply } from "../entities/Reply";
import { Reply } from "../entities/Reply";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { createReplySchema } from "../utils/validator/Joi";

export default new (class replyServices {
    private readonly replyRepository: Repository<Reply> =
        AppDataSource.getRepository(Reply);

    async find(req: Request, res: Response): Promise<Response> {
        try {
            const users = await this.replyRepository.find(); // Menjalankan pencarian thread
            return res.json(users); // Mengirim respons JSON dengan daftar thread
        } catch (error) {
            console.error(error); // Men {cetak kesalahan ke konsol
            return res
                .status(500)
                .json({ error: "Terjadi kesalahan dalam permintaan." });
        }
    }

    async findOne(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id, 10)
            const reply = await this.replyRepository.findOne({
                where: {id:id}
            })
            return res.status(200).json(reply)
        } catch (error) {
            console.log(error);
            return res.status(400).send(error)
            
        }
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;

            const { error, value } = await createReplySchema.validate(data);
            if (error) {
                return res.status(400).send(error.details[0].message);
            }

            const replies = await this.replyRepository.create({
                user: value.user,
                thread: value.thread,
                image: value.image,
                content: value.content,
            });

            const saveReplies = await this.replyRepository.save(replies);
            return res.status(200).send(saveReplies);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    }
})();
