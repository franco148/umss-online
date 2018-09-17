import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';

import { AuthData } from './auth-data.model';
import { GATEWAY_SERVER_URL } from '../../constants/app.constant';
import { User } from '../../data/model/user.model';
import { UserDto } from '../../data/dto/user-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serverUrl = `${GATEWAY_SERVER_URL}/auth/users`;

  authChanged = new Subject<boolean>();
  authErrorChanged = new Subject<string>();

  private user: User;

  constructor(private router: Router, private http: HttpClient) {
    if (localStorage.getItem('authdata')) {
      this.user = JSON.parse(localStorage.getItem('authdata'));
      this.authChanged.next(true);
    }
  }

  registerUser(userToRegister: UserDto) {
    this.http.post<any>(this.serverUrl, userToRegister).subscribe(savedUser => {
      // this.authSuccessfully('login');
      this.router.navigate(['/login']);
    });
  }

  login(authData: AuthData) {
    this.http.post<any>(`${this.serverUrl}/login`, authData).subscribe(logged => {
      this.user = logged;
      localStorage.setItem('authdata', JSON.stringify(this.user));
      this.authSuccessfully('');
    });
  }

  logout() {
    const authData: AuthData = {
      account: this.user.account,
      password: this.user.password
    };

    this.http.post<Boolean>(`${this.serverUrl}/logout`, authData).subscribe(loggedout => {
      this.user = null;
      localStorage.removeItem('authdata');
      this.authChanged.next(false);
      this.router.navigate(['/login']);
    });
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
