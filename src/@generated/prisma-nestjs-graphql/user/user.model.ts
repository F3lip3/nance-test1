import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UserStatus } from '../prisma/user-status.enum';
import { UserRole } from '../prisma/user-role.enum';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => UserStatus, {nullable:false,defaultValue:'ACTIVE'})
    status!: keyof typeof UserStatus;

    @Field(() => UserRole, {nullable:false,defaultValue:'COMMON'})
    role!: keyof typeof UserRole;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => Date, {nullable:true})
    removed_at!: Date | null;
}
