import { BossesDto } from '../dto/bosses.dto';
import { CreateBossesDto } from '../dto/create-bosses.dto';
import { Bosses } from '../entity/bosses.entity';

export class BossesMapper {
  static toDto(entidad: Bosses): BossesDto {
    const dto = new BossesDto();
    dto.id = entidad.id;
    dto.name = entidad.name;
    dto.requirement = entidad.requirement;
    dto.image = entidad.image;
    dto.max_try = entidad.max_try;
    dto.description = entidad.description;
    dto.phases = entidad.phases;
    dto.drops = entidad.drops;

    return dto;
  }

  static toDtoList(entidades: Bosses[]): BossesDto[] {
    return entidades.map((entidad) => this.toDto(entidad));
  }

  static toEntity(dto: CreateBossesDto): Bosses {
    const entidad = new Bosses();

    entidad.name = dto.name;
    entidad.requirement = dto.requirement;
    entidad.image = dto.image;
    entidad.max_try = dto.max_try;
    entidad.description = dto.description;
    entidad.phases = dto.phases;
    entidad.drops = dto.drops;

    return entidad;
  }
}
