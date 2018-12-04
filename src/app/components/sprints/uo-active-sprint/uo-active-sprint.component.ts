import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Subscription } from 'rxjs';

import { ProjectService } from '../../../service/project.service';
import { Project } from '../../../data/model/project.model';
import { UserStory } from '../../../data/model/user-story.model';

@Component({
  selector: 'app-uo-active-sprint',
  templateUrl: './uo-active-sprint.component.html',
  styleUrls: ['./uo-active-sprint.component.css']
})
export class UoActiveSprintComponent implements OnInit, AfterViewInit {

  displayedColumns = ['id', 'name', 'priority', 'estimatedTime', 'assignedTo'];
  dataSource = new MatTableDataSource<UserStory>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

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

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
}
