import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class UsersDto {
  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  id: number;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un string' })
  username: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  password: string;
}
