import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { DMS_SERVER_URL } from '../constants/app.constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DmsService {

  serverUrl = DMS_SERVER_URL;
  selectedProjecId: number;
  selectedProjectDocumentId: string;

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

  uploadDocumentVersion(selectedFileId: string, file: File, docTitle: string, docDescription: string) {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    formdata.append('title', docTitle);
    formdata.append('description', docDescription);

    const requestUrl = `${this.serverUrl}/${selectedFileId}/versions`;
    const request = new HttpRequest('POST', requestUrl, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(request);
  }

  getDocumentVersions(selectedDocumentId: string): Observable<any[]> {
    if (selectedDocumentId) {
      // http://localhost:9090/api/v1/files/42080a88-c4f3-4742-a404-1fa37fc9ad8200-50-56-C0-00-08/versions
      const urlRequest = `${this.serverUrl}/${selectedDocumentId}/versions`;
      return this.http.get<any[]>(urlRequest);
    }
  }

  getFileVersionsAmount(selectedDocumentId: string): Observable<number> {
    if (selectedDocumentId) {
      const urlRequest = `${this.serverUrl}/${selectedDocumentId}/versions/count?includeRoot=true`;
      return this.http.get<number>(urlRequest);
    }

    return new Observable();
  }

  changeDocumentVersion(documentId: any, versionId: string) {
    // http://localhost:8080/api/v1/files/dac73c08-58ad-4324-8898-DocID/versions/ad40fbe0-d219-45cc-a1fc-6db3c64db270/change
    if (documentId && versionId) {
      const urlRequest = `${this.serverUrl}/${documentId}/versions/${versionId}/change`;
      console.log('Requested to: ', urlRequest);
      return this.http.post<any>(urlRequest, null);
    }
  }
}
