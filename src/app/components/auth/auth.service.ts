import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authChanged = new Subject<boolean>();
  private user: any;

  constructor(private router: Router) { }

  registerUser(authData: any) {
    // Add the logic here.
    this.authSuccessfully();
  }

  login(authData: any) {
    // Add the logic here.
    this.authSuccessfully();
  }

  logout() {
    this.user = null;
    this.authChanged.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return {...this.user};
  }

  isAuthenticated() {
    return this.user != null;
  }

  private authSuccessfully() {
    this.authChanged.next(true);
    this.router.navigate(['/welcome']);
  }
}
