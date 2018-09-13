import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-uo-header',
  templateUrl: './uo-header.component.html',
  styleUrls: ['./uo-header.component.css']
})
export class UoHeaderComponent implements OnInit, OnDestroy {

  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.authSubscription = this.authService.authChanged.subscribe(authStatus => {
      this.isAuth = authStatus;
    });

    this.isAuth = this.authService.isAuthenticated();
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
