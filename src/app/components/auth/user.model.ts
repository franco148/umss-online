import { Role } from './role.model';

export interface User {
    name: string;
    lastName: string;
    account: string;
    password: string;
    nickName: string;
    birthdate: Date;
    userRoles: Role[];
}
