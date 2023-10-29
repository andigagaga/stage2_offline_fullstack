import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity({name: "following"})

export class Followtis {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User , (user) => user.followToUser, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    followToUser: User

    @ManyToOne(() => User , (user) => user.followingToUser, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    followingToUser: User
}