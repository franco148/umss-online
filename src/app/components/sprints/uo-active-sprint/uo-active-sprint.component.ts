import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../service/project.service';
import { Subscription } from 'rxjs';
import { Project } from '../../../data/model/project.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uo-active-sprint',
  templateUrl: './uo-active-sprint.component.html',
  styleUrls: ['./uo-active-sprint.component.css']
})
export class UoActiveSprintComponent implements OnInit {

  projectSelectedSubscription: Subscription;
  selectedProject: number;

  projectInfo: Project;

  constructor(private activatedRoute: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        console.log('............: ', params['id']);
        // this.projectId = params['id'];
        // this.dmsService.selectedProjecId = this.projectId;
        // this.buildSchemaAndBuildDocumentUri();
      }
    });
  }

}
