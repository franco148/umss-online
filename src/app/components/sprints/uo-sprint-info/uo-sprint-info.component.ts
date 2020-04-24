import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Subscription } from 'rxjs';

import { ProjectService } from '../../../service/project.service';
import { Project } from '../../../data/model/project.model';
import { Sprint } from '../../../data/model/sprint.model';

@Component({
  selector: 'app-uo-sprint-info',
  templateUrl: './uo-sprint-info.component.html',
  styleUrls: ['./uo-sprint-info.component.css']
})
export class UoSprintInfoComponent implements OnInit, OnDestroy {

  displayedColumns = ['id', 'name', 'startedOn', 'completedOn', 'active'];
  dataSource = new MatTableDataSource<Sprint>();
  // sprintSavedSubscription: Subscription;

  selectedProjectWithSprints: Project;

  constructor(private projMgtService: ProjectService) { }

  ngOnInit() {
    if (localStorage.getItem('selectedProject')) {
      const selectedProject = JSON.parse(localStorage.getItem('selectedProject'));
      this.projMgtService.loadSprintsFor(selectedProject.id).subscribe(dataResult => {
        this.selectedProjectWithSprints = dataResult;
        this.dataSource.data = this.selectedProjectWithSprints.sprints;
      });
    }
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onCreateSprint() {}

  ngOnDestroy() {
    // this.sprintSavedSubscription.unsubscribe();
  }
}
