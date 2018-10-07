import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { DMS_SERVER_URL } from '../constants/app.constant';
import { Observable } from 'rxjs';

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
    const urlRequest = `${this.serverUrl}/inclusive/query?parameters={"projectId":"${projectId}"}`;
    // const urlRequest = `http://localhost:9090/api/v1/files/inclusive/query?parameters={"projectId":"1"}`;
    console.log('Sending request to: ', urlRequest);
    return this.http.get<any>(urlRequest);
  }

  attachDocument(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    return null;
  }
}
