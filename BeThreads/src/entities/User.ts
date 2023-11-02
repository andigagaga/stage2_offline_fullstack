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

    @OneToMany(() => Threads, (thread) => thread.users, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    threads: Threads[]

    @OneToMany(() => Reply, (reply) => reply.user, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    replies: Reply[]                          

    @OneToMany(() => Likes , (like) => like.users, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    likes!: Likes[]

    @OneToMany(() => Followtis , (follower) => follower.follower, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    follower: Followtis[]

    @OneToMany(() => Followtis , (following) => following.followingToUser, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    followingToUser: Followtis[]


}