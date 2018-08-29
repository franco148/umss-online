import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../../service/project.service';

@Component({
  selector: 'app-uo-project-backlog-info',
  templateUrl: './uo-project-backlog-info.component.html',
  styleUrls: ['./uo-project-backlog-info.component.css']
})
export class UoProjectBacklogInfoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.projectService.findById(params['id']).subscribe(foundProject => {
          console.log('Found Project', foundProject);
        });
      }
    });
  }

}
