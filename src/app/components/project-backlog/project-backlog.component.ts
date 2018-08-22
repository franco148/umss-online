import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ProjectService } from '../../service/project.service';
import { Project } from '../../data/model/project.model';
import { ActivatedRoute } from '@angular/router';
import { UserStory } from '../../data/model/user-story.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Backlog } from '../../data/model/backlog.model';

@Component({
  selector: 'app-project-backlog',
  templateUrl: './project-backlog.component.html',
  styleUrls: ['./project-backlog.component.css']
})
export class ProjectBacklogComponent implements OnInit {

  project: Project;
  pBacklog: Backlog;
  userStories: UserStory[] = [];
  displayedColumns = ['id', 'name', 'description', 'priority', 'assignedTo', 'estimatedTime'];
  dataSource: MatTableDataSource<UserStory>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private activateRoute: ActivatedRoute, private projectService: ProjectService) {
    this.project = new Project();
   }

  ngOnInit() {

    this.activateRoute.params.subscribe(params => {

      this.projectService.projectsChange.subscribe(projectData => {
        console.log('AAAAAAAAAAAAAAA', projectData);
        // this.project = projectData;
      });

      // this.projectService.findById(params['id']).subscribe(response => {
      //   this.project = response;
      //   this.pBacklog = this.project.backlog;
      //   this.userStories = this.pBacklog.userStories;
      //   console.log(this.userStories);

      //   this.dataSource = new MatTableDataSource(this.userStories);
      //   this.dataSource.paginator = this.paginator;
      //   this.dataSource.sort = this.sort;
      // });

      const project1 = this.projectService.findById(params['id']);
      this.project = project1;
      this.userStories = this.project.backlog.userStories;
      this.dataSource = new MatTableDataSource(this.userStories);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    console.log(filterValue);
  }
}
