import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestsDto } from './dto/create-quests.dto';
import { QuestsDto } from './dto/quests.dto';
import { Quests } from './entity/quests.entity';
import { QuestsMapper } from './mapper/quests.mapper';

@Injectable()
export class QuestsService {
  constructor(
    @InjectRepository(Quests)
    private questsRepository: Repository<Quests>,
  ) {}

  async getAllQuests(): Promise<QuestsDto[]> {
    const result: Quests[] = await this.questsRepository.find();
    return QuestsMapper.toDtoList(result);
  }

  async getQuestsById(id: number): Promise<QuestsDto> {
    const result = await this.questsRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!result) {
      throw new BadRequestException();
    }
    return QuestsMapper.toDto(result);
  }

  async create(createQuestsDto: CreateQuestsDto): Promise<QuestsDto> {
    const exists: boolean = await this.questsRepository.exists({
      where: {
        name: createQuestsDto.name,
      },
    });

    if (exists) {
      throw Error('Ya existe una quest con ese nombre');
    }

    const entity: Quests = await QuestsMapper.toEntity(createQuestsDto);

    const result: Quests = await this.questsRepository.save(entity);

    /*const resultoWithRelation = await this.productoRepository.findOne({
      where: {
        id: result.id,
      },
      relations: {

      },
    });
    */

    return QuestsMapper.toDto(result);
  }

  async remove(id: number): Promise<QuestsDto> {
    const found: Quests = await this.questsRepository.findOne({
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
    await this.questsRepository.remove(found);
    return QuestsMapper.toDto(found);
  }
}
