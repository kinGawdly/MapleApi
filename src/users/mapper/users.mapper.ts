import { CreateUsersDto } from '../dto/create-users.dto';
import { UsersDto } from '../dto/users.dto';
import { Users } from '../entity/users.entity';

export class UsersMapper {
  static toDto(entidad: Users): UsersDto {
    const dto = new UsersDto();
    dto.id = entidad.id;
    dto.username = entidad.username;

    return dto;
  }

  static toDtoList(entidades: Users[]): UsersDto[] {
    return entidades.map((entidad) => this.toDto(entidad));
  }

  static toEntity(dto: CreateUsersDto): Users {
    const entidad = new Users();

    entidad.username = dto.username;

    return entidad;
  }
}
