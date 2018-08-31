import { UserRole } from './user-role.enum';

export interface User {
    name: string;
    lastName: string;
    account: string;
    password: string;
    nickName: string;
    birthdate: Date;
    roles: UserRole[];
}
