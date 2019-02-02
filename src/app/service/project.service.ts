import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';

import { GATEWAY_SERVER_URL } from '../constants/app.constant';
import { Project } from '../data/model/project.model';
import { ProjectDto } from '../data/dto/project-dto';
import { SharedProjectDto } from '../data/dto/shared-project-dto';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  serverUrl = `${GATEWAY_SERVER_URL}/proj-mgt/projects`;
  projectAddedChange = new Subject<Project>();

  projectsChange = new Subject<Project[]>();
  message = new Subject<string>();

  projectSelectedChange = new Subject<Project>();

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get<Project[]>(this.serverUrl);
  }

  findAllByUser(userId: number) {
    return this.http.get<Project[]>(`${this.serverUrl}/by?user=${userId}`);
  }

  findById(projectId: number) {
    return this.http.get<Project>(`${this.serverUrl}/${projectId}`);
  }

  save(project: ProjectDto) {
    return this.http.post<Project>(this.serverUrl, project);
  }

  loadSprintsFor(projectId: number) {
    return this.http.get<Project>(`${this.serverUrl}/${projectId}/sprints`);
  }

  getSelectedProjectId() {
    if (localStorage.getItem('selectedProject')) {
      const selectedProject = JSON.parse(localStorage.getItem('selectedProject'));
      return selectedProject.id;
    }
    return 0;
  }

  getSelectedProject() {
    if (localStorage.getItem('selectedProject')) {
      const selectedProject = JSON.parse(localStorage.getItem('selectedProject'));
      return selectedProject;
    }
    return null;
  }

  getSharedProjectsWithLoggedUser(loggedUserId: number) {
    const sharedProjects: Project[] = [];
    if (localStorage.getItem('sharedProjects')) {
      const loadedSharedProjects = <SharedProjectDto[]>JSON.parse(localStorage.getItem('sharedProjects'));
      loadedSharedProjects.forEach(p => {
        const isShared = p.sharedWithList.find(u => u.id === loggedUserId);
        if (isShared) {
          // sharedProjects.push(p.projectId);
        }
      });
    }
  }
}
