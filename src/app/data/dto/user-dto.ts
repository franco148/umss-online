import { RoleDto } from './role-dto';

export interface UserDto {
    name: string;
    lastName: string;
    account: string;
    password: string;
    nickName: string;
    birthdate: Date;
    userRoles: RoleDto[];
}
