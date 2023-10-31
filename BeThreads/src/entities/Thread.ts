import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  OneToMany,
  JoinColumn,
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

  @ManyToOne(() => User, (user) => user.threads, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  // @JoinColumn({ name: "user_id" })
  users: User;

  @OneToMany(() => Likes, (like) => like.threads, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  @JoinColumn()
  likes: Likes[]

  @OneToMany(() => Reply, (reply) => reply.threads, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  @JoinColumn()
  reply: Reply[]

}
