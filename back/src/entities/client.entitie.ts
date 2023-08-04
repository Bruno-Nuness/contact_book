import { getRounds, hashSync } from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("client")
class Client {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column()
  full_name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  phone_number: string
  @Column({
    default: "https://cdn-icons-png.flaticon.com/512/3106/3106921.png"
  })
  avatar: string;
  @Column()
  @Column()
  password: string;
  @Column()
  registration_date: Date;
}
export { Client };
