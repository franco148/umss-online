import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../service/project.service';

@Component({
  selector: 'app-project-backlog',
  templateUrl: './project-backlog.component.html',
  styleUrls: ['./project-backlog.component.css']
})
export class ProjectBacklogComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {

    this.projectService.findAll().subscribe(data => {
      console.log(data);
    });
  }

}
