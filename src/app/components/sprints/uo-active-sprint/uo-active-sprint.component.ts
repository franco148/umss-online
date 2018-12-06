import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Subscription } from 'rxjs';

import { ProjectService } from '../../../service/project.service';
import { Project } from '../../../data/model/project.model';
import { UserStory } from '../../../data/model/user-story.model';
import { User } from '../../../data/model/user.model';

@Component({
  selector: 'app-uo-active-sprint',
  templateUrl: './uo-active-sprint.component.html',
  styleUrls: ['./uo-active-sprint.component.css']
})
export class UoActiveSprintComponent implements OnInit, AfterViewInit {

  displayedColumns = ['id', 'name', 'priority', 'estimatedTime', 'assignedTo'];
  dataSource = new MatTableDataSource<UserStory>();

  userStoriesList: UserStory[] = [];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  projectInfo: Project;

  constructor(private activatedRoute: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.projectService.findById(params['id']).subscribe(project => {
          this.projectInfo = project;
          this.initializeDataForActiveSprint();
          console.log(this.userStoriesList);
          this.dataSource.data = this.userStoriesList.slice();
        });
      }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  initializeDataForActiveSprint() {

    const owner = new User();
    owner.id = 1;

    for (let index = 1; index <= 35; index++) {
      const userStoryItem = new UserStory();
      userStoryItem.id = index;
      userStoryItem.name = `User Story number ${index}`;
      userStoryItem.description = `User Story number ${index} description`;
      userStoryItem.priority = 'HIGH';
      userStoryItem.estimatedTime = 4;
      userStoryItem.assignedTo = owner;

      this.userStoriesList.push(userStoryItem);
    }
  }
}
