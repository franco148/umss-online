import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../../../service/project.service';
import { Project } from '../../../data/model/project.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-backlog',
  templateUrl: './project-backlog.component.html',
  styleUrls: ['./project-backlog.component.css']
})
export class ProjectBacklogComponent implements OnInit {

  project: Project;

  constructor(private activateRoute: ActivatedRoute, private projectService: ProjectService) {
    this.project = new Project();
   }

  ngOnInit() {

    this.activateRoute.params.subscribe(params => {
      this.projectService.findById(params['id']).subscribe(response => {
        this.project = response;
        console.log(this.project);
        console.log(this.project.backlog);
      });
    });

    // this.projectService.findAll().subscribe(data => {
    //   console.log(data);
    // });
  }

}
