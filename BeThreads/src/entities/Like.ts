// import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
// import { User } from "./User";
// import { Threads } from "./Thread";

// @Entity({name: "likes"})

// export class Likes {
//     @PrimaryGeneratedColumn()
//     id: number

//     @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
//     create_at: Date

//     @ManyToOne(() => User , (user) => user.likes, {
//         onUpdate: "CASCADE",
//         onDelete: "CASCADE"
//     })
//     users: User

//     @ManyToOne(() => Threads , (thread) => thread.likes, {
//         onUpdate: "CASCADE",
//         onDelete: "CASCADE"
//     })
//     threads: Threads

// }

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Threads } from "./Thread";

@Entity({name: "like"})

export class Likes {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    create_at: Date

    @ManyToOne(() => User , (user) => user.likes, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    users: User

    @ManyToOne(() => Threads , (thread) => thread.likes, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    threads: Threads

}