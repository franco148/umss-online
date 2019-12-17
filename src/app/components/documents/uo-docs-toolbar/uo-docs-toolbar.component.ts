import { Component, OnInit } from '@angular/core';

import { DmsService } from '../../../service/dms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uo-docs-toolbar',
  templateUrl: './uo-docs-toolbar.component.html',
  styleUrls: ['./uo-docs-toolbar.component.css']
})
export class UoDocsToolbarComponent implements OnInit {

  amountOfVersions = 0;

  constructor(private dmsService: DmsService, private router: Router) { }

  ngOnInit() {
    console.log('DOCUMENT ID: ', this.dmsService.selectedProjectDocumentId);
    this.dmsService.getFileVersionsAmount(this.dmsService.selectedProjectDocumentId).subscribe(amount => {
      console.log('AMOUNT GOTTEN FROM DMS SERVICE: ', amount);
      this.amountOfVersions = amount;
    });
  }

  onClickMethod() {
    this.router.navigate(['/project-document', this.dmsService.selectedProjecId, 'versions']);
  }
}
