import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DmsService } from '../../../service/dms.service';
import { Project } from '../../../data/model/project.model';
import { Backlog } from '../../../data/model/backlog.model';

@Component({
  selector: 'app-uo-doc-versions',
  templateUrl: './uo-doc-versions.component.html',
  styleUrls: ['./uo-doc-versions.component.css']
})
export class UoDocVersionsComponent implements OnInit {

  projectsList: Project[] = [];

  constructor(private dmsService: DmsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        const projectId = params['id'];
        this.buildSchemaAndBuildDocumentUri(projectId);
      }
    });
  }

  private buildSchemaAndBuildDocumentUri(projectId: number) {
    this.dmsService.findByQuery(projectId).subscribe(docSchema => {
      if (docSchema[0]) {
        const documentSchema = docSchema[0];

        this.dmsService.getDocumentVersions(documentSchema.id).subscribe(docVersions => {
          // console.log(docVersions);
          if (docVersions) {
            docVersions.forEach(version => {
              const backlog = new Backlog();
              backlog.description = version.description;

              const proj = new Project();
              proj.name = version.title;
              proj.backlog = backlog;
              proj.createdAt = new Date(version.createdDate);

              this.projectsList.push(proj);
            });
          }
          console.log('DOCUMENTS PROJECTS ', this.projectsList);
        });
      }
    });
  }

  onUpload() {}

}
