import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm"
import { Threads } from "./Thread"
import { Reply } from "./Reply";
// import reply from "../services/reply";
import { Likes } from "./Like";
// import { Followtis } from "./Follow";


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

    @ManyToMany(() => User, (user) => user.users)
	@JoinTable({
		name: "following",
		joinColumn: {
			name: "following_id",
			referencedColumnName: "id",
		},
		inverseJoinColumn: {
			name: "follower_id",
			referencedColumnName: "id",
		},
	})
	users: User[];


}