import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';

import { ProjectService } from '../../../service/project.service';
import { Project } from '../../../data/model/project.model';
import { UserStory } from '../../../data/model/user-story.model';
import { UoUsCreateModalComponent } from '../../user-stories/uo-us-create-modal/uo-us-create-modal.component';
import { UserStoryService } from '../../../service/user-story.service';

@Component({
  selector: 'app-uo-project-backlog-info',
  templateUrl: './uo-project-backlog-info.component.html',
  styleUrls: ['./uo-project-backlog-info.component.css']
})
export class UoProjectBacklogInfoComponent implements OnInit, AfterViewInit, OnDestroy {

  displayedColumns = ['id', 'name', 'priority', 'estimatedTime', 'assignedTo'];
  dataSource = new MatTableDataSource<UserStory>();
  userStorySavedSubscription: Subscription;

  projectInfo: Project;
  userStoriesList: UserStory[] = [];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private activatedRoute: ActivatedRoute, private projectService: ProjectService,
              private dialog: MatDialog, private userStoryService: UserStoryService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.projectService.findById(params['id']).subscribe(foundProject => {
          this.projectInfo = foundProject;
          // if (foundProject.backlog.userStories) {
          //   this.userStoriesList = this.projectInfo.backlog.userStories.slice();
          //   console.log('FOUND PROJECT ...... ', this.userStoriesList);
          // }
          // this.dataSource.data = this.userStoriesList.slice();

          if (foundProject.backlog) {
            this.userStoryService.findByBacklogId(foundProject.backlog.id).subscribe(storiesList => {
              // this.dataSource = new MatTableDataSource(storiesList.slice());
              // this.dataSource.sort = this.sort;
              // this.dataSource.paginator = this.paginator;
              this.userStoriesList = storiesList;
              this.dataSource.data = this.userStoriesList.slice();
            });
          }

          // this.dataSource = new MatTableDataSource(this.userStoriesList.slice());
        });
      }
    });

    this.userStorySavedSubscription = this.userStoryService.userStoryAddedChanged.subscribe(savedStory => {
      if (savedStory) {
        this.userStoriesList.push({...savedStory});
        console.log('SAVED!!!!!!!!!!!!!!!!!', this.userStoriesList);
        this.dataSource.data = this.userStoriesList;

        // const res = this.userStoryService.findByBacklogId(1).subscribe(r => {
        //   console.log('AAAAA', r);
        //   this.dataSource = new MatTableDataSource(r.slice());
        // });

        // this.dataSource = new MatTableDataSource(this.userStoriesList.slice());
        // this.dataSource.sort = this.sort;
        // this.dataSource.paginator = this.paginator;
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
        backlogId: this.projectInfo.backlog.id
      },
      width: '400px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('closed popup', result);
    });
  }

  ngOnDestroy() {
    this.userStorySavedSubscription.unsubscribe();
  }
}
