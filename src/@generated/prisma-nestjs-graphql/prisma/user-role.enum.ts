import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
    ADMIN = "ADMIN",
    COMMON = "COMMON"
}


registerEnumType(UserRole, { name: 'UserRole', description: undefined })
