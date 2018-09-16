import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

import { Subscription } from 'rxjs';

import { AuthService } from '../../auth/auth.service';
import { ProjectService } from '../../../service/project.service';

@Component({
  selector: 'app-uo-sidenav',
  templateUrl: './uo-sidenav.component.html',
  styleUrls: ['./uo-sidenav.component.css']
})
export class UoSidenavComponent implements OnInit, OnDestroy {

  @Output() sidenavOnClose = new EventEmitter<void>();
  isAuth = false;
  selectedProject = 0;

  authSubscription: Subscription;
  projectSubscription: Subscription;

  constructor(private authService: AuthService, private projectService: ProjectService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChanged.subscribe(authStatus => {
      this.isAuth = authStatus;
    });

    this.isAuth = this.authService.isAuthenticated();

    this.projectSubscription = this.projectService.projectAddedChange.subscribe(projectSelected => {
      this.selectedProject = projectSelected.id;
      console.log('SELECTED PROJECT: ', this.selectedProject);
    });
  }

  onClose() {
    this.sidenavOnClose.emit();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
