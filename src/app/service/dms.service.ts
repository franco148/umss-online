import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DMS_SERVER_URL } from '../constants/app.constant';

@Injectable({
  providedIn: 'root'
})
export class DmsService {

  serverUrl = DMS_SERVER_URL;

  constructor(private http: HttpClient) { }

  findDocViewById(id: string) {
    return this.http.get<any>(`${this.serverUrl}/${id}/view`);
  }
}
