import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';

import { GATEWAY_SERVER_URL } from '../constants/app.constant';
import { Project } from '../data/model/project.model';
import { ProjectDto } from '../data/dto/project-dto';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  serverUrl = `${GATEWAY_SERVER_URL}/proj-mgt/projects`;
  projectAddedChange = new Subject<Project>();

  projectsChange = new Subject<Project[]>();
  message = new Subject<string>();

  projectSelectedChange = new Subject<number>();

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get<Project[]>(this.serverUrl);
  }

  findById(projectId: number) {
    return this.http.get<Project>(`${this.serverUrl}/${projectId}`);
  }

  save(project: ProjectDto) {
    return this.http.post<Project>(this.serverUrl, project);
  }

  loadSprintsFor(projectId: number) {
    // http://localhost:9005/api/v1/proj-mgt/projects/2/sprints
    return this.http.get<Project>(`${this.serverUrl}/${projectId}/sprints`);
  }

}
