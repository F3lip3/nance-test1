import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserStatus } from './user-status.enum';

@InputType()
export class EnumUserStatusFieldUpdateOperationsInput {

    @Field(() => UserStatus, {nullable:true})
    set?: keyof typeof UserStatus;
}
