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
import { ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import { CreateUsersDto } from './dto/create-users.dto';
import { LoginDto } from './dto/login.dto';
import { UsersDto } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<UsersDto[]> {
    return await this.usersService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<UsersDto> {
    return await this.usersService.getUserById(id);
  }

  @Post('register')
  @ApiBody({
    type: CreateUsersDto,
    description: 'Datos del usuario a crear',
  })
  @ApiCreatedResponse({
    description: 'El usuario se creó correctamente',
    type: UsersDto,
  })
  async createUser(@Body() createUsersDto: CreateUsersDto) {
    try {
      return this.usersService.createUser(createUsersDto);
    } catch (error) {
      throw new BadRequestException();
    }
  }
  @ApiBody({
    type: LoginDto,
    description: 'Datos del usuario a logear',
  })
  @ApiCreatedResponse({
    description: 'El usuario se logeo correctamente',
    type: LoginDto,
  })
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    try {
      const result = await this.usersService.login(loginDto);
      return result;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<UsersDto> {
    try {
      const result = await this.usersService.remove(id);
      return result;
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
