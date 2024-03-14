import { Controller, Get } from '@nestjs/common';
import { MapleEventsDto } from './dto/maple_events.dto';
import { MapleEventsService } from './maple_events.service';

@Controller('maple-events')
export class MapleEventsController {
  constructor(private readonly mapleEventsService: MapleEventsService) {}

  @Get()
  async getAllMapleEvents(): Promise<MapleEventsDto[]> {
    return await this.mapleEventsService.getAllMapleEvents();
  }
}
