import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Subscription } from 'rxjs';

import { Project } from '../../../data/model/project.model';
import { ProjectService } from '../../../service/project.service';
import { UoProjectCreateModalComponent } from '../uo-project-create-modal/uo-project-create-modal.component';

@Component({
  selector: 'app-uo-project-welcome',
  templateUrl: './uo-project-welcome.component.html',
  styleUrls: ['./uo-project-welcome.component.css']
})
export class UoProjectWelcomeComponent implements OnInit, OnDestroy {

  projectsList: Project[] = [];
  projectName = 'Umss Online';
  projecSavedSubscription: Subscription;

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

    this.projecSavedSubscription = this.projectService.projectAddedChange.subscribe(projectSaved => {
      console.log('Subscribed..............', projectSaved);
      if (projectSaved) {
        this.projectsList.push(projectSaved);
      }
    });
  }

  onCreate() {
    const dialogRef = this.dialog.open(UoProjectCreateModalComponent, {
      width: '300px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('AAAAAAAAA - closed', result);
    });
  }

  ngOnDestroy() {
    this.projecSavedSubscription.unsubscribe();
  }
}
