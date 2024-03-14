import { CreateQuestsDto } from '../dto/create-quests.dto';
import { QuestsDto } from '../dto/quests.dto';
import { Quests } from '../entity/quests.entity';

export class QuestsMapper {
  static toDto(entidad: Quests): QuestsDto {
    const dto = new QuestsDto();
    dto.id = entidad.id;
    dto.name = entidad.name;
    dto.requirement = entidad.requirement;
    dto.description = entidad.description;
    dto.image = entidad.image;
    dto.type = entidad.type;

    return dto;
  }

  static toDtoList(entidades: Quests[]): QuestsDto[] {
    return entidades.map((entidad) => this.toDto(entidad));
  }

  static toEntity(dto: CreateQuestsDto): Quests {
    const entidad = new Quests();

    entidad.name = dto.name;
    entidad.requirement = dto.requirement;
    entidad.description = dto.description;
    entidad.image = dto.image;
    entidad.type = dto.type;

    return entidad;
  }
}
