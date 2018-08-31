import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';

import { User } from './user.model';
import { AuthData } from './auth-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authChanged = new Subject<boolean>();
  private user: User;

  constructor(private router: Router) { }

  registerUser(userToRegister: User) {
    // Add the logic here.
    console.log('User to Register', userToRegister);
    this.authSuccessfully();
  }

  login(authData: AuthData) {
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
    // this.router.navigate(['/welcome']);
  }
}
