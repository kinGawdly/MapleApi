import { Bosses } from 'src/bosses/entity/bosses.entity';
import { MapleEvents } from 'src/maple_events/entity/maple_events.entity';
import { Users } from 'src/users/entity/users.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @ManyToMany(() => Users, (q) => q.quests)
  users: Users;

  @ManyToMany(() => Bosses)
  @JoinTable({
    name: 'quest_bosses',
    joinColumn: { name: 'quest_id' },
    inverseJoinColumn: { name: 'boss_id' },
  })
  bosses: Bosses[];

  @ManyToMany(() => MapleEvents) // puede que haya un problema aca por el nombre de la entidad, ya que en el workbench es maple_events
  @JoinTable({
    name: 'maple_event_quests',
    joinColumn: { name: 'quest_id' },
    inverseJoinColumn: { name: 'event_id ' },
  })
  maple_events: MapleEvents[];
}
