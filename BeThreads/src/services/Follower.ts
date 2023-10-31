import { Repository } from "typeorm"
import { Followtis } from "../entities/Follow"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express";
import { followerSchema } from "../utils/validator/Joi";

export default new (class followSevices {
    private readonly followRepository : Repository<Followtis> = 
    AppDataSource.getRepository(Followtis);


    async findFollower(req: Request, res: Response): Promise<Response> {
        try {
            const follower = await this.followRepository.find({
                relations: ["followToUser"]
            })

            return res.status(200).json({
                status: "success",
                data: {
                    follower: follower,
                }
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({Error: "follower is error"})
            
        }
    }

    async createFollower(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;

        const {error, value} = await followerSchema.validate(data);

        if (error) {
            return res.status(400).json({Error: "Data Yang Dimasukkan Tidak Valid"})
        }

        const follower = await this.followRepository.create({
            follower: value.followerToUser
        });

        const saveFollower = await this.followRepository.save(follower);
        return res.status(200).json(saveFollower)
        } catch (error) {
            console.log(error);
            return res.status(500).send(error)
            
        }
        
    }

    async deletedFollower(req: Request, res: Response) : Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const follower = await this.followRepository.findOne({
                where: {id},
            })
    
            if(!follower) {
                return res.status(404).json({ Error: "error did mount"})
            }
    
            await this.followRepository.delete({
                id: id,
            })
            return res.status(200).json({data: follower})
        } catch (error) {
            console.log(error);
            return res.status(500).json({Error: `error while deletering ${error.message}`})
            
        }
      
    }
})