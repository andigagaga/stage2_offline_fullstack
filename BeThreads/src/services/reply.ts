import { Repository } from "typeorm";
// import { reply } from "../entities/Reply";
import { Reply } from "../entities/Reply";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { CreateThreadSchema, createReplySchema } from "../utils/validator/Joi";
import { User } from "../entities/User";
import { Threads } from "../entities/Thread";

export default new (class replyServices {
  private readonly replyRepository: Repository<Reply> =
    AppDataSource.getRepository(Reply);

  private readonly userRepository: Repository<User> =
    AppDataSource.getRepository(User);

  private readonly threadRepository: Repository<Threads> =
    AppDataSource.getRepository(Threads);

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
      const id = parseInt(req.params.id, 10);
      const reply = await this.replyRepository.findOne({
        where: { id: id },
      });
      return res.status(200).json(reply);
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);

      const userSelected: User | null = await this.userRepository.findOne({
        where: {
          id: res.locals.loginSession.user.id,
        },
        relations: ["threads"],
      });

      if (!userSelected)
        return res.status(400).json({ message: "user not found" });

      const threadSelected: Threads | null =
        await this.threadRepository.findOne({
          where: {
            id: id,
          },
        });

        if(!threadSelected)
        return res.status(400).json({ message: "thread not found" });


        const { content , image } = req.body;

        const {error} = CreateThreadSchema.validate(req.body);
        if(error) return res.status(400).json({message: error.details[0].message})

        const reply:Reply = new Reply();
        reply.content = content;


        if(image) reply.image = image;
        reply.user = userSelected;
        reply.threads = threadSelected;
        await this.replyRepository.save(reply);
        return res.status(201).json({
            status: "success",
            message: "reply created",
        });

    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  }
})();
