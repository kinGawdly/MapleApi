import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class QuestsDto {
  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  id: number;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  name: string;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  requirement: number;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  description: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  image: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  type: string;
}
