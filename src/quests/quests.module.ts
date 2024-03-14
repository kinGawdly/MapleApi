import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quests } from './entity/quests.entity';
import { QuestsController } from './quests.controller';
import { QuestsService } from './quests.service';

@Module({
  imports: [TypeOrmModule.forFeature([Quests])],
  controllers: [QuestsController],
  providers: [QuestsService],
})
export class QuestsModule {}
