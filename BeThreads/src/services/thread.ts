import { Repository } from "typeorm";
import { Threads } from "../entities/Thread";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { CreateThreadSchema, UpdateThreadSchema } from "../utils/validator/Joi";

const cloudinary = require("cloudinary").v2;

export default new (class ThreadServices {
    private readonly threadRepository: Repository<Threads> =
        AppDataSource.getRepository(Threads);

    async find(req: Request, res: Response): Promise<Response> {
        try {
            const threads = await this.threadRepository.find({
                relations: {
                    user: true,
                },
            }); // Menjalankan pencarian thread
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
            const user = res.locals.loginSession;
            console.log(user);

            const { error, value } = CreateThreadSchema.validate(data);
            if (error) {
                return res.status(400).send(error.details[0].message);
            }

            // konek ke claudinary
            cloudinary.config({
                cloud_name: "dsbmurtj8",
                api_key: "788719992989262",
                api_secret: "F89RbwjMUbaWXHCPm5ZOp177nic",
            });

            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "circle-app",
            });

            console.log("fffffffff", req.file.path);

            const thread = this.threadRepository.create({
                content: value.content,
                image: result.secure_url,
                user: user.user.id,
            });

            const saveThread = await this.threadRepository.save(thread);
            return res.status(200).json({
                Thread: saveThread,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);

            const thread = await this.threadRepository.findOne({ where: { id: id } });

            if (!thread) {
                return res.status(404).send("there not found");
            }

            const data = req.body;

            const { error } = UpdateThreadSchema.validate(data);
            if (error) {
                return res.status(400).send(error.details[0].message);
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
            return res.status(500).send(error);
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const thread = await this.threadRepository.findOne({
                where: { id: id },
                relations: ["user"],
            });
            if (!thread) {
                return res.status(404).send("there not found");
            } else {
                const deleteThread = await this.threadRepository.remove(thread);
                return res.status(200).send({
                    thread: deleteThread,
                    message: "thread deleted",
                });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    }
})();
