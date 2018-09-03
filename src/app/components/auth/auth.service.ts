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
  authErrorChanged = new Subject<string>();

  private user: User;

  constructor(private router: Router, private http: HttpClient) { }

  registerUser(userToRegister: User) {
    console.log('TO BE REGISTER', userToRegister);
    this.http.post<any>(this.serverUrl, userToRegister).subscribe(savedUser => {
      this.authSuccessfully('login');
    });
  }

  login(authData: AuthData) {
    console.log('VERIFIED WITH DATA', authData);
    this.http.post<any>(`${this.serverUrl}/login`, authData).subscribe(logged => {
      console.log('LOGGED: ', logged);
      this.user = logged;
      console.log('LOGGED this user: ', this.user);
      this.authSuccessfully('welcome');
    });
    // return this.http.post(`${this.serverUrl}/login`, authData);
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

  private authSuccessfully(path: string) {
    this.authChanged.next(true);
    this.router.navigate([`/${path}`]);
  }
}
