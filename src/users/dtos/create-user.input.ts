import { InputType } from '@nestjs/graphql';
import { CreateUserInput as CreateUserInputModel } from '../../graphql';

@InputType()
export class CreateUserInput extends CreateUserInputModel {}
