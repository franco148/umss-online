import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roleFormat'
})
export class RoleFormatPipe implements PipeTransform {

  transform(userRoles: any, args?: any): any {
    let usrRolesString;

    userRoles.forEach(role => {
      if (!usrRolesString) {
        usrRolesString = role.authority;
      } else {
        usrRolesString = `${usrRolesString} | ${role.authority}`;
      }
    });

    return usrRolesString;
  }

}
