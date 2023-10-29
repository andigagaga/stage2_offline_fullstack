import { Repository } from "typeorm"
import { Followtis } from "../entities/Follow"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express";
import { followingSchema } from "../utils/validator/Joi";

export default new (class followingServices {
    private readonly followingRepository : Repository<Followtis> = 
    AppDataSource.getRepository(Followtis);

    async findFollowing(req: Request, res: Response): Promise<Response> {
        try {
            const following = await this.followingRepository.find({
                relations: ["followingToUser"]
            })
            return res.status(200).json({
                statu: "succes",
                data: {
                    following: following
                }
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({Error: `Error while getting replies ${error.message}`})
            
        }
    }

    async createFollowing(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;

        const {error, value} = await followingSchema.validate(data);

        if (error) {
            return res.status(400).json({Error: "Data Yang Dimasukkan Tidak Valid"})
        }

        const follower = await this.followingRepository.create({
            followingToUser: value.followingToUser
        });

        const saveFollower = await this.followingRepository.save(follower);
        return res.status(200).json(saveFollower)
        } catch (error) {
            console.log(error);
            return res.status(500).send(error)
            
        }
        
    }

    async deletedFollowing(req: Request, res: Response) : Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const follower = await this.followingRepository.findOne({
                where: {id},
            })
    
            if(!follower) {
                return res.status(404).json({ Error: "error did mount"})
            }
    
            await this.followingRepository.delete({
                id: id,
            })
            return res.status(200).json({data: follower})
        } catch (error) {
            console.log(error);
            return res.status(500).json({Error: `error while deletering ${error.message}`})
            
        }
      
    }
})