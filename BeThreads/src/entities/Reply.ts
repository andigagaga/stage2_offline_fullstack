import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { User } from "./User"
import { Threads } from "./Thread"
// import { Threads } from "./Thread"

@Entity({name: "replies"})

export class Reply {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({nullable:true})
    image: string

    @Column()
    content: string

    @CreateDateColumn({type: "timestamp"})
    created_at: Date

    @UpdateDateColumn({type: "timestamp"})
    updated_at: Date

    @ManyToOne(() => User , (user) => user.replies, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    user: User

    @ManyToOne(() => Threads, (thread) => thread.replies, {
		onUpdate: "CASCADE",
		onDelete: "CASCADE",
	})
	threads: Threads;

}