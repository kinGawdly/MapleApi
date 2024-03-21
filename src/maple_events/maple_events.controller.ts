import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { CreateMapleEventsDto } from './dto/create-maple_events.dto';
import { MapleEventsDto } from './dto/maple_events.dto';
import { MapleEventsService } from './maple_events.service';

@Controller('maple-events')
export class MapleEventsController {
  constructor(private readonly mapleEventsService: MapleEventsService) {}

  @Get()
  async getAllMapleEvents(): Promise<MapleEventsDto[]> {
    return await this.mapleEventsService.getAllMapleEvents();
  }

  @Get(':id')
  async getMapleEventById(@Param('id') id: number): Promise<MapleEventsDto> {
    return await this.mapleEventsService.getMapleEventById(id);
  }

  @Post()
  @ApiBody({
    type: CreateMapleEventsDto,
    description: 'Datos del evento a crear',
  })
  @ApiBadRequestResponse({
    description: 'Ya existe un evento con ese nombre',
  })
  @ApiCreatedResponse({
    description: 'El evento se creo correctamente',
    type: MapleEventsDto,
  })
  async create(
    @Body() createMapleEventsDto: CreateMapleEventsDto,
  ): Promise<MapleEventsDto> {
    try {
      const result = await this.mapleEventsService.create(createMapleEventsDto);
      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Evento eliminado', type: MapleEventsDto })
  @ApiNotFoundResponse({ description: 'No se encontró el evento' })
  async remove(@Param('id') id: number): Promise<MapleEventsDto> {
    try {
      const result = await this.mapleEventsService.remove(id);
      return result;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
