import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { User } from "./User"
import { Threads } from "./Thread"
// import { Threads } from "./Thread"

@Entity({name: "replies"})

export class Reply {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    image: string

    @Column()
    content: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(() => User , (user) => user.reply, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    user: User

    @ManyToOne(() => Threads, (thread) => thread.reply, {
		onUpdate: "CASCADE",
		onDelete: "CASCADE",
	})
	threads: Threads;

}