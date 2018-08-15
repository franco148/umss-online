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

  // tslint:disable-next-line:no-input-rename
  // @Input('project') selectedProject: Project;
  private project: Project;

  constructor(private activateRoute: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {

    this.activateRoute.params.subscribe(params => {
      console.log('id: ' + params['id']);
      this.projectService.findById(params['id']).subscribe(response => {
        this.project = response;
        console.log('Response: ' + this.project);
      });
    });

    // this.projectService.findAll().subscribe(data => {
    //   console.log(data);
    // });
  }

}
