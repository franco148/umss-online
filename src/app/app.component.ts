import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { ProjectService } from './service/project.service';
import { AuthService } from './components/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  isAuthenticated = false;

  authChangedSubscription: Subscription;

  constructor(private router: Router, private projectService: ProjectService, private authService: AuthService) {
  }

  ngOnInit() {
    this.authChangedSubscription = this.authService.authChanged.subscribe(authStatus => {
      this.isAuthenticated = authStatus;
    });
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authChangedSubscription.unsubscribe();
  }

}
