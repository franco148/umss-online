import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';

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
export class SharingPanelComponent implements OnInit {

  displayedColumns = ['id', 'fullName', 'role', 'options'];
  dataSource = new MatTableDataSource<User>();

  selectedProject: Project;
  sharedUsersList: User[] = [];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private projService: ProjectService, private coomonService: CommonService, private dialog: MatDialog) { }

  ngOnInit() {
    this.selectedProject = this.projService.getSelectedProject();
    // const sharedCollectionResult = this.coomonService.getSharedProjects().slice();
    // for (let index = 0; index < sharedCollectionResult.length; index++) {
    //   const usr = new User();
    //   usr.id = sharedCollectionResult[index].id;
    //   usr.name = sharedCollectionResult[index].name;
    //   usr.lastName = sharedCollectionResult[index].lastName;
    //   usr.userRoles = sharedCollectionResult[index].userRoles;
    //   this.sharedUsersList.push(usr);
    // }
    // this.dataSource.data = this.sharedUsersList.slice();
    // console.log('aaaa', this.sharedUsersList);
    // console.log('In Panel:  ', this.dataSource.data);
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
