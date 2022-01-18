import { InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  Length,
  MaxLength,
  MinLength
} from 'class-validator';
import { CreateUserInput as CreateUserInputModel } from '../../graphql';

@InputType()
export class CreateUserInput implements CreateUserInputModel {
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
