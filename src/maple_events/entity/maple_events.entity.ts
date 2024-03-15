import { Quests } from 'src/quests/entity/quests.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('maple_events')
export class MapleEvents {
  @PrimaryGeneratedColumn({ name: 'id' }) // Para indicar el nombre de la columna
  id: number;

  @Column({ name: 'name' }) // Para indicar que el nombre de la columna es el mismo nombre del atributo
  name: string;

  @Column({ name: 'requirement' })
  requirement: number;

  @Column({ name: 'image' })
  image: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'phases' })
  phases: string;

  @Column({ name: 'type' })
  type: string;

  @Column({ name: 'rewards' })
  rewards: string;

  @ManyToMany(() => Quests, (m) => m.maple_events)
  quests: Quests[];
}
