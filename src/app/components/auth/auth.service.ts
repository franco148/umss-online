import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';

import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { GATEWAY_SERVER_URL } from '../../constants/app.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serverUrl = `${GATEWAY_SERVER_URL}/auth/users`;
  authChanged = new Subject<boolean>();
  private user: User;

  constructor(private router: Router, private http: HttpClient) { }

  registerUser(userToRegister: User) {
    // Add the logic here.
    console.log('User to Register', userToRegister);
    this.authSuccessfully();
  }

  login(authData: AuthData) {
    this.http.post<User>(`${this.serverUrl}/login`, authData).subscribe(logged => {
      console.log('LOGGED: ', logged);
    });
    // Add the logic here.
    // this.authSuccessfully();
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
