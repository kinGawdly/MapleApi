import { Controller, Get } from '@nestjs/common';
import { BossesService } from './bosses.service';
import { BossesDto } from './dto/bosses.dto';

@Controller('bosses')
export class BossesController {
  constructor(private readonly bossesService: BossesService) {}

  @Get()
  async getAllBosses(): Promise<BossesDto[]> {
    return await this.bossesService.getAllBosses();
  }
}
