import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Project } from '../../../data/model/project.model';
import { ProjectService } from '../../../service/project.service';
import { UoProjectCreateModalComponent } from '../uo-project-create-modal/uo-project-create-modal.component';

@Component({
  selector: 'app-uo-project-welcome',
  templateUrl: './uo-project-welcome.component.html',
  styleUrls: ['./uo-project-welcome.component.css']
})
export class UoProjectWelcomeComponent implements OnInit {

  projectsList: Project[] = [];
  projectName = 'Umss Online';

  constructor(private dialog: MatDialog, private projectService: ProjectService) { }

  ngOnInit() {
    // const p0 = new Project();
    // const p1 = new Project();
    // const p2 = new Project();

    // this.projectsList.push(p0);
    // this.projectsList.push(p1);
    // this.projectsList.push(p2);

    this.projectService.findAll().subscribe(dataResponse => {
      this.projectsList = dataResponse.slice();
      console.log(this.projectsList);
    });
  }

  onCreate() {
    const dialogRef = this.dialog.open(UoProjectCreateModalComponent, {
      width: '300px',
      disableClose: true
    });
  }
}
