// import { Repository } from "typeorm"
// import { User } from "../entities/User"
// import { AppDataSource } from "../data-source"
// import { Request, Response } from "express"

// export default new (class FollowingServices {
//     private readonly UserRepository: Repository<User> = AppDataSource.getRepository(User)


//     async follow(req: Request, res: Response): Promise<Response> {
//         try {
//             const id = parseInt(req.params.id)

//             if (!id) {
//                 return res.status(400).json({ message: "userId not found" })
//             }

//             const followingToUser: User | null = await this.UserRepository.findOne({
//                 where: {
//                     id,
//                 }
//             })

//             if (!followingToUser) {
//                 return res.status(400).json({ message: "user not found" })
//             }

//             const followerToUser: User | null = await this.UserRepository.findOne({
//                 where: {
//                     id: res.locals.loginSession.user.id
//                 }
//             })

//             if (!followerToUser) {
//                 return res.status(400).json({ message: "user not found" })
//             }

//             if (followingToUser.id === followerToUser.id) {
//                 return res.status(400).json({ message: "you can't follow yourself" })
//             }

//             const checkFollow = await this.UserRepository.query(
//                 "SELECT * FROM following WHERE following_id=$1 AND follower_id=$2", [followingToUser.id, followerToUser.id]
//             );

//             if (checkFollow.length) {
//                 await this.UserRepository.query(
//                     "DELETE FROM following WHERE following_id=$1 AND follower_id=$2",
//                     [followingToUser.id, followerToUser.id]
//                 )
//                 return res.status(200).json({ message: "unfollowed" })
//             }

//             await this .UserRepository.query(
//                 "INSERT INTO following (following_id, follower_id) VALUES ($1, $2)",
//                 [followingToUser.id, followerToUser.id]
//             )
//             return res.status(200).json({ 
//                 status: "succes"
//                 ,message: "followed" })
            
//         } catch (error) {
//             console.log(error);

//         }
//     }
// // }