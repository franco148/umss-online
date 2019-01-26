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

    console.log(this.sharedProjects);
  }

  getSharedProjects() {
    return this.sharedProjects;
  }

  shareProjectWith(user: User) {
    const selectedProject = this.projectService.getSelectedProject();
    const sharedProject = this.sharedProjects.find(p => p.projectId === selectedProject.id);
    const sharedWithUser = sharedProject.sharedWithList.find(u => u.id === user.id);
    if (!sharedWithUser) {
      sharedProject.sharedWithList.push(user);
      console.log(this.sharedProjects);
    }
  }
}
