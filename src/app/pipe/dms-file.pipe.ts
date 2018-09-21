import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'dmsFile'
})
export class DmsFilePipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: any): any {
    console.log('PIPE URL..................');
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
