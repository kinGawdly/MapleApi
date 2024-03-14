import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateMapleEventsDto {
  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  name: string;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  requirement: number;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  image: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  description: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  phases: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  type: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  rewards: string;
}
