import { CreateMapleEventsDto } from '../dto/create-maple_events.dto';
import { MapleEventsDto } from '../dto/maple_events.dto';
import { MapleEvents } from '../entity/maple_events.entity';

export class MapleEventsMapper {
  static toDto(entidad: MapleEvents): MapleEventsDto {
    const dto = new MapleEventsDto();
    dto.id = entidad.id;
    dto.name = entidad.name;
    dto.requirement = entidad.requirement;
    dto.image = entidad.image;
    dto.description = entidad.description;
    dto.phases = entidad.phases;
    dto.type = entidad.type;
    dto.rewards = entidad.rewards;

    return dto;
  }

  static toDtoList(entidades: MapleEvents[]): MapleEventsDto[] {
    return entidades.map((entidad) => this.toDto(entidad));
  }

  static toEntity(dto: CreateMapleEventsDto): MapleEvents {
    const entidad = new MapleEvents();

    entidad.name = dto.name;
    entidad.requirement = dto.requirement;
    entidad.image = dto.image;
    entidad.description = dto.description;
    entidad.phases = dto.phases;
    entidad.type = dto.type;
    entidad.rewards = dto.rewards;

    return entidad;
  }
}
