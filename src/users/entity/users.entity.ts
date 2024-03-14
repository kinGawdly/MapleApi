import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn({ name: 'id' }) // Para indicar el nombre de la columna
  id: number;
  @Column({ name: 'username' }) // Para indicar que el nombre de la columna es el mismo nombre del atributo
  username: string;

  /*@ManyToMany(() => Bosses)
  @JoinTable({ name: "User_Bosses" })
  bosses: Bosses[];
  */

  /*@ManyToMany(() => Quests)
  @JoinTable({ name: "User_Quests" })
  quests: Quests[];
  */
}
