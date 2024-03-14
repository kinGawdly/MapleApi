import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BossesModule } from './bosses/bosses.module';
import { Bosses } from './bosses/entity/bosses.entity';
import { MapleEvents } from './maple_events/entity/maple_events.entity';
import { MapleEventsModule } from './maple_events/maple_events.module';
import { Quests } from './quests/entity/quests.entity';
import { QuestsModule } from './quests/quests.module';
import { Users } from './users/entity/users.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 33070,
      username: 'root',
      password: 'maple',
      database: 'MAPLESITO',
      entities: [Users, Quests, Bosses, MapleEvents],
    }),
    UsersModule,
    QuestsModule,
    BossesModule,
    MapleEventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
