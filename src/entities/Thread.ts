import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User } from "./User";
import { Likes } from "./Like";
import { Reply } from "./Reply";

@Entity({ name: "threads" })
export class Threads {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  image: string;

  @ManyToOne(() => User, (user) => user.threads)
  // , { onUpdate: "CASCADE", onDelete: "CASCADE" })
  user: User;

  @OneToMany(() => Likes, (like) => like.likeToThread, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  likeToThread: Likes[]

  @OneToMany(() => Reply, (reply) => reply.thread, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  selectedthread: Reply[]

}
