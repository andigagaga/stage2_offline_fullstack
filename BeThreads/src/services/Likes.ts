import { Repository } from "typeorm";
import { Likes } from "../entities/Like";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { likesSchema } from "../utils/validator/Joi";

export default new (class likeServices {
    private readonly likeRepository: Repository<Likes> =
        AppDataSource.getRepository(Likes);

    async find(req: Request, res: Response): Promise<Response> {
        try {
            const likes = await this.likeRepository.find({
                relations: ["users", "threads"],
            });

            return res.status(200).json({ status: "succes", data: { likes: likes } });
        } catch (error) {
            console.log(error);
            return res.status(400).json(error);
        }
    }

    async like(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;

            const { error } = await likesSchema.validate(data);
            if (error) {
                return res
                    .status(400)
                    .json({ Error: "Data Yang Dimasukkan Tidak Valid" });
            }

            const objectLikes = this.likeRepository.create({
                users: data.users,
                threads: data.threads,
            });

            const saveLike = await this.likeRepository.save(objectLikes);
            return res.status(200).json(saveLike);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    }
})();
