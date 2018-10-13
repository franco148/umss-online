import { Component, OnInit } from '@angular/core';
import { DmsService } from '../../../service/dms.service';
import { Project } from '../../../data/model/project.model';

@Component({
  selector: 'app-uo-doc-versions',
  templateUrl: './uo-doc-versions.component.html',
  styleUrls: ['./uo-doc-versions.component.css']
})
export class UoDocVersionsComponent implements OnInit {

  projectsList: Project[] = [];

  constructor(private dmsService: DmsService) { }

  ngOnInit() {
    if (this.dmsService.selectedProjectDocumentId) {
      this.dmsService.getDocumentVersions().subscribe(docVersions => {
        console.log('DOC VERSIONSSSSSSS', docVersions);
      });
    }
  }

}
