import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { User } from "./User";

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
}
