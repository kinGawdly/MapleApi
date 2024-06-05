import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as Crypto from 'crypto';
import { Repository } from 'typeorm';
import { CreateUsersDto } from './dto/create-users.dto';
import { LoginDto } from './dto/login.dto';
import { UsersDto } from './dto/users.dto';
import { Users } from './entity/users.entity';
import { UsersMapper } from './mapper/users.mapper';
@Injectable()
export class UsersService {
  textoOriginal = 'EJEMPLO';
  password = 'Password used to generate key';
  modo = 'AES-256-CBC';

  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async getAllUsers(): Promise<UsersDto[]> {
    const result: Users[] = await this.usersRepository.find();
    return UsersMapper.toDtoList(result);
  }

  async getUserById(id: number): Promise<UsersDto> {
    const result = await this.usersRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!result) {
      throw new BadRequestException();
    }
    return UsersMapper.toDto(result);
  }

  async createUser(createUsers: CreateUsersDto) {
    const entity: Users = UsersMapper.toEntity(createUsers);
    const searchUser: Users = await this.usersRepository.findOne({
      where: {
        username: createUsers.username,
      },
    });

    if (searchUser) {
      throw Error();
    }
    const iv = Crypto.randomBytes(16);
    const cipher = Crypto.createCipheriv(
      this.modo,
      Buffer.from(this.password),
      iv,
    );

    const textoEncriptado = Buffer.concat([
      cipher.update(entity.password),
      cipher.final(),
    ]);

    entity.password = textoEncriptado.toString('hex');

    const result: Users = await this.usersRepository.save(entity);
    return UsersMapper.toDto(result);
  }

  async login(loginDto: LoginDto) {
    const searchUser = await this.usersRepository.findOne({
      where: {
        username: loginDto.username,
      },
    });
    if (!searchUser) {
      throw Error();
    }
    let iv; // EL MISMO UTILIZADO PARA ENCRIPTA
    const decipher = Crypto.createDecipheriv(
      this.modo,
      Buffer.from(this.password),
      iv,
    );

    const decrypted = Buffer.concat([
      decipher.update(textoEncriptado),
      decipher.final(),
    ]);
    const textoOriginal = decrypted.toString();
  }

  async remove(id: number): Promise<UsersDto> {
    const find: Users = await this.usersRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!find) {
      throw Error();
    }
    await this.usersRepository.remove(find);
    return UsersMapper.toDto(find);
  }
}
