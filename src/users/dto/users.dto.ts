import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class UsersDto {
  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  id: number;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un string' })
  username: string;
}
