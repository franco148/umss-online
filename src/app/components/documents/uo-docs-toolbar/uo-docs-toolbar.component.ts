import { Component, OnInit } from '@angular/core';
import { DmsService } from '../../../service/dms.service';

@Component({
  selector: 'app-uo-docs-toolbar',
  templateUrl: './uo-docs-toolbar.component.html',
  styleUrls: ['./uo-docs-toolbar.component.css']
})
export class UoDocsToolbarComponent implements OnInit {

  constructor(private dmsService: DmsService) { }

  ngOnInit() {
  }

  onClickMethod() {
    console.log('menu buttons clicks!!!...', this.dmsService.selectedProjecId, '   .............  ',
     this.dmsService.selectedProjectDocumentId);
  }
}
