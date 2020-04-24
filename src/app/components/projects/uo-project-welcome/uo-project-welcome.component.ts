import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Subscription } from 'rxjs';

import { Project } from '../../../data/model/project.model';
import { ProjectService } from '../../../service/project.service';
import { UoProjectCreateModalComponent } from '../uo-project-create-modal/uo-project-create-modal.component';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-uo-project-welcome',
  templateUrl: './uo-project-welcome.component.html',
  styleUrls: ['./uo-project-welcome.component.css']
})
export class UoProjectWelcomeComponent implements OnInit, OnDestroy {

  projectsList: Project[] = [];
  projectName = 'Umss Online';
  projecSavedSubscription: Subscription;

  constructor(private dialog: MatDialog, private projectService: ProjectService, private authService: AuthService) { }

  ngOnInit() {
    this.projectService.findAll().subscribe(resultList => {
      const sharedProjectsId = this.projectService.getSharedProjectsWithLoggedUser(this.authService.getUser().id);

      this.projectService.findAllByUser(this.authService.getUser().id).subscribe(dataResponse => {
        this.projectsList = dataResponse.slice();
        resultList.forEach(p => {
          const isShared = sharedProjectsId.find(id => id === p.id);
          if (isShared) {
            this.projectsList.push(p);
          }
        });
      });
    });

    this.projecSavedSubscription = this.projectService.projectAddedChange.subscribe(projectSaved => {
      if (projectSaved) {
        this.projectsList.push(projectSaved);
      }
    });

    localStorage.removeItem('selectedProject');
    this.projectService.projectSelectedChange.next(null);
  }

  onCreate() {
    const dialogRef = this.dialog.open(UoProjectCreateModalComponent, {
      width: '300px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('closed popup', result);
    });
  }

  ngOnDestroy() {
    this.projecSavedSubscription.unsubscribe();
  }
}
