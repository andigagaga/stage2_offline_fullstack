import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Threads } from "./Thread"


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


}