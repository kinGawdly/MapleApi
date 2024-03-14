import { Module } from '@nestjs/common';
import { MapleEvents } from './entity/maple_events.entity';
import { MapleEventsController } from './maple_events.controller';
import { MapleEventsService } from './maple_events.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MapleEvents])],
  providers: [MapleEventsService],
  controllers: [MapleEventsController],
})
export class MapleEventsModule {}
