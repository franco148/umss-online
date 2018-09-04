import { Role } from './role.model';
export class User {

    id: number;
    name: string;
    lastName: string;
    nickName: string;
    birthDate: Date;
    account: string;
    password: string;
    isLogged: boolean;
    isDeleted: boolean;
    isEnabled: boolean;
    userRoles: Role[];

    createdAt: Date;
    updatedAt: Date;
}
