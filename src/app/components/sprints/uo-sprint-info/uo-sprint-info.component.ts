import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../../service/project.service';
import { Project } from '../../../data/model/project.model';

@Component({
  selector: 'app-uo-sprint-info',
  templateUrl: './uo-sprint-info.component.html',
  styleUrls: ['./uo-sprint-info.component.css']
})
export class UoSprintInfoComponent implements OnInit {

  selectedProjectWithSprints: Project;

  constructor(private projMgtService: ProjectService) { }

  ngOnInit() {
    this.projMgtService.loadSprintsFor(2).subscribe(dataResult => {
      this.selectedProjectWithSprints = dataResult;
      console.log(this.selectedProjectWithSprints);
    });
  }

}
