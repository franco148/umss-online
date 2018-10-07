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

  findByQuery(projectId: number) {
    // http://localhost:9090/api/v1/files/inclusive/query?parameters={"projectId":"1"}
    // const urlRequest = `${this.serverUrl}/inclusive/query?parameters={"projectId":"${projectId}"}`;
    const urlRequest = `http://localhost:9090/api/v1/files/inclusive/query?parameters={"projectId":"1"}`;
    console.log('Sending request to: ', urlRequest);
    return this.http.get<any>(urlRequest);
  }
}
