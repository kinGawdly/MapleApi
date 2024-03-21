import { Controller, Get, Param } from '@nestjs/common';
import { BossesService } from './bosses.service';
import { BossesDto } from './dto/bosses.dto';

@Controller('bosses')
export class BossesController {
  constructor(private readonly bossesService: BossesService) {}

  @Get()
  async getAllBosses(): Promise<BossesDto[]> {
    return await this.bossesService.getAllBosses();
  }

  @Get(':id')
  async getBossesById(@Param('id') id: number): Promise<BossesDto> {
    return await this.bossesService.getBossesById(id);
  }
}
