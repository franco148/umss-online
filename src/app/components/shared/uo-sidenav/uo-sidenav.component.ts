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
  projectSelectedSubscription: Subscription;

  constructor(private authService: AuthService, private projectService: ProjectService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChanged.subscribe(authStatus => {
      this.isAuth = authStatus;
    });

    this.isAuth = this.authService.isAuthenticated();

    this.projectSelectedSubscription = this.projectService.projectSelectedChange.subscribe(projectSelectedId => {
      this.selectedProject = projectSelectedId;
      localStorage.setItem('selectedProject', JSON.stringify(this.selectedProject));
    });

    if (localStorage.getItem('selectedProject')) {
      this.selectedProject = JSON.parse(localStorage.getItem('selectedProject'));
    }
  }

  onClose() {
    this.sidenavOnClose.emit();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
