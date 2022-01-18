import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserInput } from './dtos/create-user.input';
import { UpdateUserInput } from './dtos/update-user.input';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateUserInput) {
    return this.prisma.user.create({ data });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  findOneByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  update({ id, ...data }: UpdateUserInput) {
    this.prisma.user.update({
      where: { id },
      data
    });
  }

  remove(id: number) {
    this.prisma.user.update({
      where: { id },
      data: {
        status: 'REMOVED',
        removed_at: new Date(Date.now())
      }
    });
  }
}
