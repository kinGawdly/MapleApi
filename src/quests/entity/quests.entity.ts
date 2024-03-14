import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('quests')
export class Quests {
  @PrimaryGeneratedColumn({ name: 'id' }) // Para indicar el nombre de la columna
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'requirement' })
  requirement: number;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'image' })
  image: string;

  @Column({ name: 'type' })
  type: string;

  /*@ManyToMany(() => Bosses)
  @JoinTable({ name: "Quest_Bosses" })
  bosses: Bosses[];
  */

  /*@ManyToMany(() => Events)
  @JoinTable({ name: "Event_quests" })
  events: Events[];
  */
}
