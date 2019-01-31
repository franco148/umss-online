import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { AuthService } from '../components/auth/auth.service';
import { User } from '../data/model/user.model';
import { ProjectService } from './project.service';
import { SharedProjectDto } from '../data/dto/shared-project-dto';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  sharedProjects: SharedProjectDto[] = [];
  sharedProjectChanged = new Subject<User>();

  constructor(private authService: AuthService, private projectService: ProjectService) {
    if (localStorage.getItem('sharedProjects')) {
      const loadedSharedProjects = <SharedProjectDto[]>JSON.parse(localStorage.getItem('sharedProjects'));
      this.sharedProjects = loadedSharedProjects.slice();
    }
  }

  getUsersFromSharedProject(): User[] {
    const selectedProject = this.projectService.getSelectedProject();
    const foundSelectedProject = this.sharedProjects.find(p => p.projectId === selectedProject.id);
    return foundSelectedProject.sharedWithList;
  }

  shareProjectWith(user: User) {
    const selectedProject = this.projectService.getSelectedProject();
    const sharedProject = this.sharedProjects.find(p => p.projectId === selectedProject.id);
    if (sharedProject) {
      const sharedWithUser = sharedProject.sharedWithList.find(u => u.id === user.id);
      if (!sharedWithUser) {
        sharedProject.sharedWithList.push(user);
        localStorage.setItem('sharedProjects', JSON.stringify(this.sharedProjects));
        this.sharedProjectChanged.next(user);
      }
    } else {
      const usersList: User[] = [];
      usersList.push(user);

      this.sharedProjects.push({
        projectId: selectedProject.id,
        sharedWithList: usersList
      });
      localStorage.setItem('sharedProjects', JSON.stringify(this.sharedProjects));
      this.sharedProjectChanged.next(user);
    }
  }

  getUsersToShareWith(): User[] {
    const userListResult: User[] = [];
    this.authService.findAll().subscribe(users => {
      const listOfSharedUsers = this.getUsersFromSharedProject();
      users.forEach(usr => {
        const foundUser = listOfSharedUsers.filter(u => u.id === usr.id);
        if (!foundUser) {
          userListResult.push(foundUser[0]);
        }
      });
    });

    return userListResult;
  }

  updateProjectSharing(usersList: User[]) {
    const selectedProject = this.projectService.getSelectedProject();
    const sharedProject = this.sharedProjects.find(p => p.projectId === selectedProject.id);
    if (sharedProject) {
      sharedProject.sharedWithList = usersList.slice();
      localStorage.setItem('sharedProjects', JSON.stringify(this.sharedProjects));
    }
  }
}
