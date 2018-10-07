import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { DMS_SERVER_URL } from '../constants/app.constant';
import { Observable } from 'rxjs';
import { text } from '@angular/core/src/render3/instructions';

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
    return this.http.get<any>(urlRequest);
  }

  attachDocument(file: File, resourceId: number): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    const paramFormData = `{"title": "File Title", "description": "File Description", "projectId": "${resourceId}"}`;

    formdata.append('file', file);
    formdata.append('parameters', paramFormData);

    const request = new HttpRequest('POST', this.serverUrl, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(request);
  }
}
