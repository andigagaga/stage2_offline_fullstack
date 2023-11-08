import { ILike, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { Request, Response } from "express";
import { createUserSchema, updateUserSchema } from "../utils/validator/Joi";

export default new (class UserServices {
  private readonly userRepository: Repository<User> =
    AppDataSource.getRepository(User);

  async find(req: Request, res: Response): Promise<Response> {
    try {

      const {search = ""} = req.query
      const users = await this.userRepository.find({
        where: [
          {
            fullName: ILike(`%${search}%`)
          },
          {
            userName: ILike(`%${search}%`)
          }
        ]
      }); // Menjalankan pencarian thread
      return res.json(users); // Mengirim respons JSON dengan daftar thread
    } catch (error) {
      console.error(error); // Men {cetak kesalahan ke konsol
      return res
        .status(500)
        .json({ error: "Terjadi kesalahan dalam permintaan." });
    }
  }

  async sugestedUsers(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.userRepository.createQueryBuilder()
        .select()
        .orderBy("RANDOM()")
        .limit(3)
        .getMany()
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "Terjadi kesalahan dalam permintaan." });
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;

      const { error, value } = await createUserSchema.validate(data);
      if (error) {
        return res.status(400).send(error.details[0].message);
      }

      const user = await this.userRepository.create({
        userName: value.userName,
        fullName: value.fullName,
        email: value.email,
        password: value.password,
        profile_picture: value.profile_picture,
        profile_desc: value.profile_desc,
      });

      const saveUser = await this.userRepository.save(user);
      return res.status(200).send(saveUser);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);

      const user = await this.userRepository.findOne({ where: { id: id } });

      if (!user) {
        return res.status(404).send("there not found");
      }

      const data = req.body;

      const { error } = updateUserSchema.validate(data);
      if (error) {
        return res.status(400).send(error.details[0].message);
      }

      if (data.userName) {
        user.userName = data.userName;
      }

      if (data.fullName) {
        user.fullName = data.fullName;
      }

      if (data.email) {
        user.email = data.email;
      }

      if (data.password) {
        user.password = data.password;
      }

      if (data.profile_picture) {
        user.profile_picture = data.profile_picture;
      }

      await this.userRepository.save(user);

      const updateUser = await this.userRepository.save(user);
      return res.status(200).send(updateUser);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const user = await this.userRepository.findOne({
        where: { id: id },
      });
      if (!user) {
        return res.status(404).send("there not found");
      } else {
        const deleteThread = await this.userRepository.delete({ id: id });
        return res.status(200).send({
          thread: deleteThread,
          message: "user deleted",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  }
})();
