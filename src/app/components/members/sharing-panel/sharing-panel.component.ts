import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { ProjectService } from '../../../service/project.service';
import { Project } from '../../../data/model/project.model';
import { User } from '../../../data/model/user.model';

@Component({
  selector: 'app-sharing-panel',
  templateUrl: './sharing-panel.component.html',
  styleUrls: ['./sharing-panel.component.css']
})
export class SharingPanelComponent implements OnInit {

  displayedColumns = ['id', 'fullName', 'role', 'options'];
  dataSource = new MatTableDataSource<User>();

  selectedProject: Project;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private projService: ProjectService) { }

  ngOnInit() {
    this.selectedProject = this.projService.getSelectedProject();
  }

  onShareProject() {

  }
}
