import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { Subscription } from 'rxjs';

import { ProjectService } from '../../../service/project.service';
import { Project } from '../../../data/model/project.model';
import { User } from '../../../data/model/user.model';
import { SharingModalComponent } from '../sharing-modal/sharing-modal.component';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-sharing-panel',
  templateUrl: './sharing-panel.component.html',
  styleUrls: ['./sharing-panel.component.css']
})
export class SharingPanelComponent implements OnInit, OnDestroy {

  displayedColumns = ['id', 'fullName', 'role', 'options'];
  dataSource = new MatTableDataSource<User>();

  selectedProject: Project;
  sharedUsersList: User[] = [];
  projectShareSubscription: Subscription;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private projService: ProjectService, private coomonService: CommonService, private dialog: MatDialog) { }

  ngOnInit() {
    this.selectedProject = this.projService.getSelectedProject();
    const resultOfSharedUsers = this.coomonService.getUsersFromSharedProject();
    if (resultOfSharedUsers) {
      this.sharedUsersList = resultOfSharedUsers;
    }
    this.dataSource.data = this.sharedUsersList.slice();

    this.projectShareSubscription = this.coomonService.sharedProjectChanged.subscribe(usr => {
      this.sharedUsersList.push(usr);
      this.dataSource.data = this.sharedUsersList.slice();
    });
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

  onRemoveSharing(position: number) {
    this.sharedUsersList.splice(position, 1);
    this.coomonService.updateProjectSharing(this.sharedUsersList);
    this.dataSource.data = this.sharedUsersList.slice();
  }

  ngOnDestroy() {
    if (this.projectShareSubscription) {
      this.projectShareSubscription.unsubscribe();
    }
  }
}
