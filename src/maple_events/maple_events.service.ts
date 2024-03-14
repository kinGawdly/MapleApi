import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MapleEventsDto } from './dto/maple_events.dto';
import { MapleEvents } from './entity/maple_events.entity';
import { MapleEventsMapper } from './mapper/maple_events.mapper';

@Injectable()
export class MapleEventsService {
  constructor(
    @InjectRepository(MapleEvents)
    private mapleEventsRepository: Repository<MapleEvents>,
  ) {}

  async getAllMapleEvents(): Promise<MapleEventsDto[]> {
    const result: MapleEvents[] = await this.mapleEventsRepository.find();
    return MapleEventsMapper.toDtoList(result);
  }
}
