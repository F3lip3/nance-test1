import { BadRequestException } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { encrypt } from '../common/helpers/crypto';
import { CreateUserInput } from './dtos/create-user.input';
import { UpdateUserInput } from './dtos/update-user.input';
import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('createUser')
  async create(@Args('createUserInput') data: CreateUserInput) {
    const exists = await this.usersService.findOneByEmail(data.email);
    if (exists) {
      throw new BadRequestException(
        'An user with the provided email already exists.'
      );
    }

    return this.usersService.create({
      ...data,
      password: encrypt(data.password)
    });
  }

  @Query('user')
  findOne(@Args('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation('updateUser')
  async update(@Args('updateUserInput') data: UpdateUserInput) {
    if (data.email) {
      const existing = await this.usersService.findOneByEmail(data.email);
      if (existing?.id !== data.id) {
        throw new BadRequestException(
          'An user with the provided email already exists.'
        );
      }
    }

    return this.usersService.update({
      ...data,
      password: encrypt(data.password)
    });
  }

  @Mutation('removeUser')
  remove(@Args('id') id: number) {
    return this.usersService.remove(id);
  }
}
