import { Component, OnInit } from '@angular/core';

import { DmsService } from '../../../service/dms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uo-docs-toolbar',
  templateUrl: './uo-docs-toolbar.component.html',
  styleUrls: ['./uo-docs-toolbar.component.css']
})
export class UoDocsToolbarComponent implements OnInit {

  constructor(private dmsService: DmsService, private router: Router) { }

  ngOnInit() {
  }

  onClickMethod() {
    this.router.navigate(['/project-document', this.dmsService.selectedProjecId, 'versions']);
  }
}
