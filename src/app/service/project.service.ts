import { Injectable } from '@angular/core';
import { GATEWAY_SERVER_URL } from '../constants/app.constant';
import { HttpClient } from '@angular/common/http';
import { Project } from '../data/model/project.model';
import { Subject } from 'rxjs';
import { ProjectDto } from '../data/dto/project-dto';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  serverUrl = `${GATEWAY_SERVER_URL}/proj-mgt/projects`;

  projectsChange = new Subject<Project[]>();
  message = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get<Project[]>(this.serverUrl);
  }

  findById(projectId: number) {
    return this.http.get<Project>(`${this.serverUrl}/${projectId}`);
  }

  save(project: ProjectDto) {
    return this.http.post(this.serverUrl, project);
  }

}
