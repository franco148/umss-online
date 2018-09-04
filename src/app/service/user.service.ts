import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GATEWAY_SERVER_URL } from '../constants/app.constant';
import { User } from '../data/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  serverUrl = `${GATEWAY_SERVER_URL}/auth/users`;

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<User[]>(this.serverUrl);
  }

  findById(userId: number) {
    return this.http.get<User>(`${this.serverUrl}/${userId}`);
  }

  save(project: any) {
    // return this.http.post(this.serverUrl, project);
  }
}
