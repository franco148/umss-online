import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roleKeys'
})
export class RoleKeysPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const keys: string[] = [];

    // tslint:disable-next-line:forin
    for (const enumMember in value) {
      keys.push(enumMember);
    }
    return keys;
  }

}
