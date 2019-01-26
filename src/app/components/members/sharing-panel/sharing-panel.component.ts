import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';

import { ProjectService } from '../../../service/project.service';
import { Project } from '../../../data/model/project.model';
import { User } from '../../../data/model/user.model';
import { SharingModalComponent } from '../sharing-modal/sharing-modal.component';

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

  constructor(private projService: ProjectService, private dialog: MatDialog) { }

  ngOnInit() {
    this.selectedProject = this.projService.getSelectedProject();
  }

  onShareProject() {
    const dialogRef = this.dialog.open(SharingModalComponent, {
      width: '400px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('closed popup', result);
    });
  }
}
