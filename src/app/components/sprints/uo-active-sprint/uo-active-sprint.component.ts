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

  projectInfo: Project;

  constructor(private activatedRoute: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.projectService.findById(params['id']).subscribe(project => {
          this.projectInfo = project;
        });
      }
    });
  }

}
