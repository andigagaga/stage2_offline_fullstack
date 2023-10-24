import { Repository } from "typeorm";
import { Threads } from "../entities/Thread";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { CreateThreadSchema, UpdateThreadSchema } from "../utils/validator/Joi";
import { promises } from "dns";
import { log } from "console";

export default new (class ThreadServices {
    private readonly threadRepository: Repository<Threads> =
        AppDataSource.getRepository(Threads);

    async find(req: Request, res: Response): Promise<Response> {
        try {
            const threads = await this.threadRepository.find(); // Menjalankan pencarian thread
            return res.json(threads); // Mengirim respons JSON dengan daftar thread
        } catch (error) {
            console.error(error); // Men {cetak kesalahan ke konsol
            return res
                .status(500)
                .json({ error: "Terjadi kesalahan dalam permintaan." });
        }
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;

            const { error, value } = await CreateThreadSchema.validate(data);
            if (error) {
                return res.status(400).send(error.details[0].message);
            }

            const thread = await this.threadRepository.create({
                content: value.content,
                image: value.image,
                user: value.user,
            });

            const saveThread = await this.threadRepository.save(thread);
            return res.status(200).send(saveThread);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id)

            const thread = await this.threadRepository.findOne({ where: { id: id } })

            if (!thread) {
                return res.status(404).send("there not found")
            }

            const data = req.body;

            const { error } = UpdateThreadSchema.validate(data);
            if (error) {
                return res.status(400).send(error.details[0].message)
            }

            if (data.content) {
                thread.content = data.content;
            }

            if (data.image) {
                thread.image = data.image;
            }

            if (data.user) {
                thread.user = data.user;
            }

            await this.threadRepository.save(thread);

            const updateThread = await this.threadRepository.save(thread);
            return res.status(200).send(updateThread);

        } catch (error) {
            console.log(error);
            return res.status(500).send(error)

        }
    }

    async delete(req: Request, res: Response): Promise<Response> {

        try {
            const id = parseInt(req.params.id);
            const thread = await this.threadRepository.findOne({
                where: { id: id },
                relations: ["user"]
            })
            if (!thread) {
                return res.status(404).send("there not found");
            } else {
                const deleteThread = await this.threadRepository.remove(thread)
                return res.status(200).send({
                    thread: deleteThread,
                    message: "thread deleted"
                })
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send(error)

        }

    }

})();
