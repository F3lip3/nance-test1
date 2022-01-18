import { registerEnumType } from '@nestjs/graphql';

export enum UserStatus {
    ACTIVE = "ACTIVE",
    REMOVED = "REMOVED"
}


registerEnumType(UserStatus, { name: 'UserStatus', description: undefined })
