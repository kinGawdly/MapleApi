import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMapleEventsDto } from './dto/create-maple_events.dto';
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

  async getMapleEventById(id: number): Promise<MapleEventsDto> {
    const result = await this.mapleEventsRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!result) {
      throw new BadRequestException();
    }
    return MapleEventsMapper.toDto(result);
  }

  async create(
    createMapleEventsDto: CreateMapleEventsDto,
  ): Promise<MapleEventsDto> {
    const exists: boolean = await this.mapleEventsRepository.exists({
      where: {
        name: createMapleEventsDto.name,
      },
    });

    if (exists) {
      throw Error('ya existe un evento con ese nombre');
    }

    const entity: MapleEvents = await MapleEventsMapper.toEntity(
      createMapleEventsDto,
    );
    const result: MapleEvents = await this.mapleEventsRepository.save(entity);

    return MapleEventsMapper.toDto(result);
  }

  async remove(id: number): Promise<MapleEventsDto> {
    const found: MapleEvents = await this.mapleEventsRepository.findOne({
      where: {
        id: id,
      },
      /*relations: {

      },
      */
    });
    if (!found) {
      throw Error('No se encontró la quest');
    }
    await this.mapleEventsRepository.remove(found);
    return MapleEventsMapper.toDto(found);
  }
}
