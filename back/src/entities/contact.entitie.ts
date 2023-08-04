import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entitie";

@Entity("contact")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column()
  full_name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  phone_number: string;
  @Column({
    default: "https://cdn-icons-png.flaticon.com/512/3106/3106921.png",
  })
  avatar: string;
  @Column()
  registration_date: Date;
  @ManyToOne(() => Client, { onDelete: "CASCADE" })
  client: Client;
}
export { Contact };
