import { Injectable } from '@angular/core';
import { GATEWAY_SERVER_URL } from '../constants/app.constant';
import { HttpClient } from '@angular/common/http';
import { Project } from '../data/model/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  serverUrl = `${GATEWAY_SERVER_URL}/proj-mgt/projects`;

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Project[]>(this.serverUrl);
  }

  findById(projectId: number) {
    return this.http.get<Project>(`${this.serverUrl}/${projectId}`);
  }
}
