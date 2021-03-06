import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

import { Subscription } from 'rxjs';

import { AuthService } from '../../auth/auth.service';
import { ProjectService } from '../../../service/project.service';
import { User } from '../../../data/model/user.model';

@Component({
  selector: 'app-uo-sidenav',
  templateUrl: './uo-sidenav.component.html',
  styleUrls: ['./uo-sidenav.component.css']
})
export class UoSidenavComponent implements OnInit, OnDestroy {

  @Output() sidenavOnClose = new EventEmitter<void>();
  isAuth = false;
  selectedProject = 0;
  authUser: User = null;

  authSubscription: Subscription;
  projectSelectedSubscription: Subscription;

  constructor(private authService: AuthService, private projectService: ProjectService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChanged.subscribe(authStatus => {
      this.isAuth = authStatus;
    });

    this.isAuth = this.authService.isAuthenticated();
    this.authUser = this.authService.getUser();

    this.projectSelectedSubscription = this.projectService.projectSelectedChange.subscribe(selectedProject => {
      if (selectedProject) {
        this.selectedProject = selectedProject.id;
        localStorage.setItem('selectedProject', JSON.stringify(selectedProject));
      } else {
        this.selectedProject = 0;
      }
    });

    this.selectedProject = this.projectService.getSelectedProjectId();
  }

  onClose() {
    this.sidenavOnClose.emit();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
