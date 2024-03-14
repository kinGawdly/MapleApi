import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BossesController } from './bosses.controller';
import { BossesService } from './bosses.service';
import { Bosses } from './entity/bosses.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bosses])],
  controllers: [BossesController],
  providers: [BossesService],
})
export class BossesModule {}
