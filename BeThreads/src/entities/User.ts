import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Like } from "typeorm"
import { Threads } from "./Thread"
import { Reply } from "./Reply";
// import reply from "../services/reply";
import { Likes } from "./Like";
import Follower from "../services/Follower";
import { Followtis } from "./Follow";


@Entity({ name: "users" })

export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userName: string;

    @Column()
    fullName: string;

    @Column()
    email: string;

    @Column({ select: true })
    password: string;

    @Column({ nullable: true })
    profile_picture: string;

    @Column({ nullable: true })
    profile_desc: string;

    @OneToMany(() => Threads, (thread) => thread.user, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    threads: Threads[]

    @OneToMany(() => Reply, (reply) => reply.user, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    reply: Reply[]

    @OneToMany(() => Likes , (like) => like.likeToUser, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    likeToUser: Likes[]

    @OneToMany(() => Followtis , (follower) => follower.followToUser, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    followToUser: Followtis[]

    @OneToMany(() => Followtis , (following) => following.followingToUser, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    followingToUser: Followtis[]


}