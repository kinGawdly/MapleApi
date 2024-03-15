import { Quests } from 'src/quests/entity/quests.entity';
import { Users } from 'src/users/entity/users.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bosses')
export class Bosses {
  @PrimaryGeneratedColumn({ name: 'id' }) // Para indicar el nombre de la columna
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'requirement' })
  requirement: number;

  @Column({ name: 'image' })
  image: string;

  @Column({ name: 'max_try' })
  max_try: number;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'phases' })
  phases: number;

  @Column({ name: 'drops' })
  drops: string;

  @ManyToMany(() => Users, (u) => u.bosses)
  users: Users[];

  @ManyToMany(() => Quests, (q) => q.bosses)
  quests: Quests[];
}
