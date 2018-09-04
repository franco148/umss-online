import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';

import { ProjectService } from '../../../service/project.service';
import { Project } from '../../../data/model/project.model';
import { UserStory } from '../../../data/model/user-story.model';
import { UoUsCreateModalComponent } from '../../user-stories/uo-us-create-modal/uo-us-create-modal.component';

@Component({
  selector: 'app-uo-project-backlog-info',
  templateUrl: './uo-project-backlog-info.component.html',
  styleUrls: ['./uo-project-backlog-info.component.css']
})
export class UoProjectBacklogInfoComponent implements OnInit, AfterViewInit {

  displayedColumns = ['id', 'name', 'priority', 'estimatedTime', 'assignedTo'];
  dataSource = new MatTableDataSource<UserStory>();

  projectInfo: Project;
  userStoriesList: UserStory[] = [];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private activatedRoute: ActivatedRoute, private projectService: ProjectService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.projectService.findById(params['id']).subscribe(foundProject => {
          this.projectInfo = foundProject;
          this.dataSource.data = this.userStoriesList;
        });
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onCreateUserStory() {
    const dialogRef = this.dialog.open(UoUsCreateModalComponent, {
      data: {
        userStoryId: this.projectInfo.backlog.id
      },
      width: '400px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('closed popup', result);
    });
  }
}
