import { InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  Length,
  MaxLength,
  MinLength
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsNotEmpty()
  @Length(5, 200)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(200)
  email: string;

  @IsNotEmpty()
  @MinLength(5)
  password: string;
}
