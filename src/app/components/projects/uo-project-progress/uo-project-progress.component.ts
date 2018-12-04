import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { UserStory } from '../../../data/model/user-story.model';

@Component({
  selector: 'app-uo-project-progress',
  templateUrl: './uo-project-progress.component.html',
  styleUrls: ['./uo-project-progress.component.css']
})
export class UoProjectProgressComponent implements OnInit, AfterViewInit {

  displayedColumns = ['id', 'name', 'priority', 'estimatedTime', 'assignedTo'];
  dataSource = new MatTableDataSource<UserStory>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
}
