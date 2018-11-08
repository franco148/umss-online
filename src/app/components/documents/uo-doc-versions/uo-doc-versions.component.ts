import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { DmsService } from '../../../service/dms.service';
import { Project } from '../../../data/model/project.model';
import { Backlog } from '../../../data/model/backlog.model';
import { UoDocUploadModalComponent } from '../uo-doc-upload-modal/uo-doc-upload-modal.component';

@Component({
  selector: 'app-uo-doc-versions',
  templateUrl: './uo-doc-versions.component.html',
  styleUrls: ['./uo-doc-versions.component.css']
})
export class UoDocVersionsComponent implements OnInit {

  projectsList: Project[] = [];
  selectedProjectId: number;
  selectedDocumentId: string;

  constructor(private dmsService: DmsService, private activatedRoute: ActivatedRoute,
              private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        const projectId = params['id'];
        this.selectedProjectId = projectId;
        this.buildSchemaAndBuildDocumentUri(projectId);
      }
    });
  }

  private buildSchemaAndBuildDocumentUri(projectId: number) {
    this.dmsService.findByQuery(projectId).subscribe(docSchema => {
      if (docSchema[0]) {
        const documentSchema = docSchema[0];
        this.selectedDocumentId = documentSchema.id;

        this.dmsService.getDocumentVersions(documentSchema.id).subscribe(docVersions => {
          // myArr.sort((val1, val2)=> {return new Date(val2.CREATE_TS) - new Date(val1.CREATE_TS)})
          if (docVersions) {
            docVersions.sort((v1, v2) => {
              return v2.createdDate - v1.createdDate;
            });
            docVersions.forEach(version => {
              console.log('DOCUMENT VERSION: ', version);
              const backlog = new Backlog();
              backlog.description = version.description;

              const proj = new Project();
              proj.name = version.title;
              proj.isRoot = version.root;
              proj.backlog = backlog;
              proj.createdAt = new Date(version.createdDate);

              this.projectsList.push(proj);
            });
          }
        });
      }
    });
  }

  onUpload() {
    const dialogRef = this.dialog.open(UoDocUploadModalComponent, {
      data: {
        documentId: this.selectedDocumentId
      },
      width: '370px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.projectsList = [];
      this.buildSchemaAndBuildDocumentUri(this.selectedProjectId);
    });
  }

  goBackToDocumentViewer() {
    this.router.navigate(['/project', this.selectedProjectId, 'document']);
  }

}
