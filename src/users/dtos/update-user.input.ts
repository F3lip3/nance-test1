import { InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Length,
  MaxLength,
  MinLength
} from 'class-validator';
import { UpdateUserInput as UpdateUserInputModel } from '../../graphql';

@InputType()
export class UpdateUserInput implements UpdateUserInputModel {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsOptional()
  @Length(5, 200)
  name?: string;

  @IsEmail()
  @IsOptional()
  @MaxLength(200)
  email?: string;

  @IsOptional()
  @MinLength(5)
  password?: string;
}
