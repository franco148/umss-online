import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { AuthService } from '../components/auth/auth.service';
import { User } from '../data/model/user.model';
import { ProjectService } from './project.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  sharedProjects: { projectId: number, sharedWithList: User[] }[] = [];
  sharedProjectChanged = new Subject<{ projectId: number, sharedWith: User }>();

  constructor(private authService: AuthService, private projectService: ProjectService) {
    if (localStorage.getItem('sharedProjects')) {
      this.sharedProjects = JSON.parse(localStorage.getItem('sharedProjects'));
    }

    console.log('SharedProjects when Constructor::: ', this.sharedProjects);
  }

  getSharedProjects() {
    const selectedProject = this.projectService.getSelectedProject();
    return this.sharedProjects.find(p => p.projectId === selectedProject.id);
  }

  shareProjectWith(user: User) {
    const selectedProject = this.projectService.getSelectedProject();
    const sharedProject = this.sharedProjects.find(p => p.projectId === selectedProject.id);
    if (sharedProject) {
      const sharedWithUser = sharedProject.sharedWithList.find(u => u.id === user.id);
      if (!sharedWithUser) {
        sharedProject.sharedWithList.push(user);
        // console.log('When project is already shared....', this.sharedProjects);
        localStorage.setItem('sharedProjects', JSON.stringify(this.sharedProjects));
      }
    } else {
      const usersList: User[] = [];
      usersList.push(user);
      this.sharedProjects.push({
        projectId: selectedProject.id,
        sharedWithList: usersList
      });
      // console.log('When project is being shared the first time...', this.sharedProjects);
      localStorage.setItem('sharedProjects', JSON.stringify(this.sharedProjects));
    }
  }

  getUsersToShareWith() {}
}
