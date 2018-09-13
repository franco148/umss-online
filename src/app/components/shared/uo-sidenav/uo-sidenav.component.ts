import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

import { Subscription } from 'rxjs';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-uo-sidenav',
  templateUrl: './uo-sidenav.component.html',
  styleUrls: ['./uo-sidenav.component.css']
})
export class UoSidenavComponent implements OnInit, OnDestroy {

  @Output() sidenavOnClose = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;
  selectedProject = 0;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChanged.subscribe(authStatus => {
      this.isAuth = authStatus;
    });

    this.isAuth = this.authService.isAuthenticated();
  }

  onClose() {
    this.sidenavOnClose.emit();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
