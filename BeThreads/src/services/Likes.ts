import { Repository } from "typeorm";
import { Likes } from "../entities/Like";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { likesSchema } from "../utils/validator/Joi";
import { User } from "../entities/User";
import { Threads } from "../entities/Thread";

export default new (class likeServices {
  private readonly likeRepository: Repository<Likes> =
    AppDataSource.getRepository(Likes);

  private readonly UserRepository: Repository<User> =
    AppDataSource.getRepository(User);

  private readonly threadsRepository: Repository<Threads> =
    AppDataSource.getRepository(Threads);

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
      const { id } = req.params;
      //    console.log(threadId);

      if (!id) {
        return res.status(400).json({ Error: `threadId is required ${id}` });
      }

      //    console.log(res.locals);
      const userSelected: User | null = await this.UserRepository.findOne({
        where: { id: res.locals.loginSession.user.id },
      });

      const threadSelected: Threads | null =
        await this.threadsRepository.findOne({
          where: { id: parseInt(req.params.id) },
        });

      if (!threadSelected) {
        return res.status(400).json({ Error: `threadId is not found ${id}` });
      }

      //    check like
      const likeSelected: Likes | null = await this.likeRepository.findOne({
        where: {
          users: {
            id: userSelected.id,
          },
          threads: {
            id: threadSelected.id,
          },
        },
      });

      console.log(likeSelected);

      if (likeSelected) {
        await this.likeRepository.delete(likeSelected.id);
        return res.status(200).json({ status: "unlike" });
      }

      // untuk nge like
      const like = new Likes();
      like.users = userSelected;
      like.threads = threadSelected;
      await this.likeRepository.save(like);
      return res.status(200).json({ status: "like" });
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  }
})();
