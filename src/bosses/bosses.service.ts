import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BossesDto } from './dto/bosses.dto';
import { Bosses } from './entity/bosses.entity';
import { BossesMapper } from './mapper/bosses.mapper';

@Injectable()
export class BossesService {
  constructor(
    @InjectRepository(Bosses) private bossesRepository: Repository<Bosses>,
  ) {}

  async getAllBosses(): Promise<BossesDto[]> {
    const result: Bosses[] = await this.bossesRepository.find();
    return BossesMapper.toDtoList(result);
  }

  async getBossesById(id: number): Promise<BossesDto> {
    const result = await this.bossesRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!result) {
      throw new BadRequestException();
    }
    return BossesMapper.toDto(result);
  }
}
