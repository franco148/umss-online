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
  // sharedProjectChanged = new Subject<{ projectId: number, sharedWith: User }>();

  constructor(private authService: AuthService, private projectService: ProjectService) {
    if (localStorage.getItem('sharedProjects')) {
      const loadedSharedProjects = <SharedProjectDto[]>JSON.parse(localStorage.getItem('sharedProjects'));
      // loadedSharedProjects.forEach(sharedP => {
      //   const projectDto = new SharedProjectDto();
      //   projectDto.projectId = sharedP.projectId;
      //   projectDto.sharedWithList = <User[]>sharedP.sharedWithList;
      //   console.log(projectDto.projectId);
      //   sharedP.sharedWithList.forEach(e => {
      //     const algo = <User>e;
      //     console.log('.....', algo);
      //   });
      // });
      this.sharedProjects = loadedSharedProjects.slice();
      console.log('aaaaa', loadedSharedProjects);
    }

    // console.log('SharedProjects when Constructor::: ', this.sharedProjects);
  }

  getSharedProjects(): User[] {
    const selectedProject = this.projectService.getSelectedProject();
    const foundSelectedProject = this.sharedProjects.find(p => p.projectId === selectedProject.id);
    console.log('foun found, ', foundSelectedProject.sharedWithList);
    foundSelectedProject.sharedWithList.forEach(element => {
      console.log('IIIIIIIIIIIIIIII', element.id);
    });
    return foundSelectedProject.sharedWithList;
  }

  shareProjectWith(user: User) {
    const selectedProject = this.projectService.getSelectedProject();
    const sharedProject = this.sharedProjects.find(p => p.projectId === selectedProject.id);
    if (sharedProject) {
      const sharedWithUser = sharedProject.sharedWithList.find(u => u.id === user.id);
      if (!sharedWithUser) {
        sharedProject.sharedWithList.push(user);
        console.log('When project is already shared....', this.sharedProjects);
        localStorage.setItem('sharedProjects', JSON.stringify(this.sharedProjects));
      }
    } else {
      const usersList: User[] = [];
      usersList.push(user);

      // const projectDto = new SharedProjectDto();
      // projectDto.projectId = selectedProject.id;
      // projectDto.sharedWithList = usersList;
      this.sharedProjects.push({
        projectId: selectedProject.id,
        sharedWithList: usersList
      });
      // this.sharedProjects.push(projectDto);
      console.log('When project is being shared the first time...', this.sharedProjects);
      localStorage.setItem('sharedProjects', JSON.stringify(this.sharedProjects));
    }
  }

  getUsersToShareWith() {}
}
