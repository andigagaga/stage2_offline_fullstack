import { Repository } from "typeorm";
import { Likes } from "../entities/Like";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
// import { likesSchema } from "../utils/validator/Joi";

export default new (class likeServices {
    private readonly likeRepository: Repository<Likes> =
        AppDataSource.getRepository(Likes);

    async find(req: Request, res: Response): Promise<Response> {
        try {
            const likes = await this.likeRepository.find({
                relations: ["likeToUser", "likeToThread"],

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

            const likes = this.likeRepository.create({
                likeToUser: data.likeToUser,
                likeToThread: data.likeToThread,
            })

            const saveLike = await this.likeRepository.save(likes)
            return res.status(200).send(saveLike)
        } catch (error) {
            console.log(error);
            return res.status(500).send(error)

        }
    }

})();
