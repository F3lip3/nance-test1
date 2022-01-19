import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { encrypt } from '../common/helpers/crypto';
import { CreateUserInput } from './dtos/create-user.input';
import { UpdateUserInput } from './dtos/update-user.input';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: CreateUserInput) {
    const exists = await this.prisma.user.findUnique({
      where: { email: user.email }
    });

    if (exists) {
      throw new BadRequestException(
        'An user with the provided email already exists.'
      );
    }

    return this.prisma.user.create({
      data: {
        ...user,
        password: encrypt(user.password)
      }
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update({ id, ...data }: UpdateUserInput) {
    if (data.email) {
      const existing = await this.prisma.user.findUnique({
        where: { email: data.email }
      });

      if (existing?.id !== id) {
        throw new BadRequestException(
          'An user with the provided email already exists.'
        );
      }
    }

    return this.prisma.user.update({
      where: { id },
      data
    });
  }

  remove(id: number) {
    const exists = this.prisma.user.findUnique({ where: { id } });
    if (!exists) {
      throw new NotFoundException({
        message: 'User not found'
      });
    }

    return this.prisma.user.update({
      where: { id },
      data: {
        status: 'REMOVED',
        removed_at: new Date(Date.now())
      }
    });
  }
}
