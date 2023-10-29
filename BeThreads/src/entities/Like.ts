import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Threads } from "./Thread";

@Entity({name: "like"})

export class Likes {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    create_at: Date

    @ManyToOne(() => User , (user) => user.likeToUser, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    likeToUser: User

    @ManyToOne(() => Threads , (thread) => thread.likeToThread, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    likeToThread: Threads

}