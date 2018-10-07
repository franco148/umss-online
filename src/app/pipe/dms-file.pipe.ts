import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'dmsFile'
})
export class DmsFilePipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: any): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
