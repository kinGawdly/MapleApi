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
import { CreateQuestsDto } from './dto/create-quests.dto';
import { QuestsDto } from './dto/quests.dto';
import { QuestsService } from './quests.service';

@Controller('quests')
export class QuestsController {
  constructor(private readonly questsService: QuestsService) {}

  @Get()
  async getAllQuests(): Promise<QuestsDto[]> {
    return await this.questsService.getAllQuests();
  }

  @Get(':id')
  async getQuestsById(@Param('id') id: number): Promise<QuestsDto> {
    return await this.questsService.getQuestsById(id);
  }

  @Post()
  @ApiBody({
    type: CreateQuestsDto,
    description: 'Datos de la quest a crear',
  })
  @ApiBadRequestResponse({
    description: 'Ya existe una quest con ese nombre',
  })
  @ApiCreatedResponse({
    description: 'La quest se creo correctamente',
    type: QuestsDto,
  })
  async create(@Body() createQuestsDto: CreateQuestsDto): Promise<QuestsDto> {
    try {
      const resultado = await this.questsService.create(createQuestsDto);
      return resultado;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Quest eliminada', type: QuestsDto })
  @ApiNotFoundResponse({ description: 'No se encontró la quest' })
  async remove(@Param('id') id: number): Promise<QuestsDto> {
    try {
      const result = await this.questsService.remove(id);
      return result;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
