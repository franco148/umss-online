import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DmsService } from '../../../service/dms.service';
import { User } from '../../../data/model/user.model';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-uo-docs-toolbar',
  templateUrl: './uo-docs-toolbar.component.html',
  styleUrls: ['./uo-docs-toolbar.component.css']
})
export class UoDocsToolbarComponent implements OnInit {

  amountOfVersions = 0;
  reviewers: User[] = [];
  reviewersAmount = 0;
  reviewersToolTip = '';

  constructor(private dmsService: DmsService, private commonService: CommonService, private router: Router) { }

  ngOnInit() {
    // This gets the amount of versions including the root file
    this.dmsService.getFileVersionsAmount(this.dmsService.selectedProjectDocumentId).subscribe(amount => {
      this.amountOfVersions = amount;
    });

    // This information will be loaded in tool bar of Document Viewer
    // Information for Tutors and Reviewers
    this.reviewers = this.commonService.getUsersFromSharedProject();
    this.reviewersAmount = this.reviewers.length;
    this.reviewers.forEach(user => {
      if (this.reviewersToolTip.length === 0) {
        this.reviewersToolTip += `${user.name} ${user.lastName}`;
      } else {
        this.reviewersToolTip += `, ${user.name} ${user.lastName}`;
      }
    });
  }

  onClickMethod() {
    this.router.navigate(['/project-document', this.dmsService.selectedProjecId, 'versions']);
  }
}
