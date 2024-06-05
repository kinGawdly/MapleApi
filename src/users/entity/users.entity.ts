import { Bosses } from 'src/bosses/entity/bosses.entity';
import { Quests } from 'src/quests/entity/quests.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn({ name: 'id' }) // Para indicar el nombre de la columna
  id: number;
  @Column({ name: 'username' }) // Para indicar que el nombre de la columna es el mismo nombre del atributo
  username: string;
  @Column({ name: 'password' })
  password: string;

  @ManyToMany(() => Bosses)
  @JoinTable({
    name: 'user_bosses',
    joinColumn: { name: 'user_id' },
    inverseJoinColumn: { name: 'boss_id' },
  })
  bosses: Bosses[];

  @ManyToMany(() => Quests)
  @JoinTable({
    name: 'user_quests',
    joinColumn: { name: 'user_id' },
    inverseJoinColumn: { name: 'quest_id' },
  })
  quests: Quests[];
}
