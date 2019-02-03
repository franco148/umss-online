import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { AuthService } from '../components/auth/auth.service';
import { User } from '../data/model/user.model';
import { ProjectService } from './project.service';
import { SharedProjectDto } from '../data/dto/shared-project-dto';
import { NotesDto } from '../data/dto/notes-dto';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  sharedProjects: SharedProjectDto[] = [];
  projectCommentsList: {projectId: number, notesInfo: NotesDto[]}[] = [];

  sharedProjectChanged = new Subject<User>();
  projectNotesChanged = new Subject<NotesDto>();

  constructor(private authService: AuthService, private projectService: ProjectService) {
    if (localStorage.getItem('sharedProjects')) {
      const loadedSharedProjects = <SharedProjectDto[]>JSON.parse(localStorage.getItem('sharedProjects'));
      this.sharedProjects = loadedSharedProjects.slice();
    }

    if (localStorage.getItem('projectCommentsList')) {
      const loadedProjectComments = <{projectId: number, notesInfo: NotesDto[]}[]>JSON.parse(localStorage.getItem('projectCommentsList'));
      this.projectCommentsList = loadedProjectComments.slice();
    }
  }

  getUsersFromSharedProject(): User[] {
    const selectedProject = this.projectService.getSelectedProject();
    const foundSelectedProject = this.sharedProjects.find(p => p.projectId === selectedProject.id);
    if (foundSelectedProject) {
      return foundSelectedProject.sharedWithList;
    }

    return [] as User[];
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

  async getUsersToShareWith() {
    const userListResult: User[] = [];

    const loggedUser = this.authService.getUser();
    await this.authService.findAll().subscribe(users => {
      const listOfSharedUsers = this.getUsersFromSharedProject();
      users.forEach(usr => {
        const foundUserFromSharingList = listOfSharedUsers.filter(u => u.id === usr.id);
        if (foundUserFromSharingList.length <= 0 && usr.id !== loggedUser.id) {
          userListResult.push(usr);
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

  saveProjectComment(projComment: NotesDto) {
    const projectSelectedId = this.projectService.getSelectedProjectId();

    const selectedProject = this.projectCommentsList.find(p => p.projectId === projectSelectedId);
    if (selectedProject) {
      selectedProject.notesInfo.push(projComment);
    } else {
      const projectNotes: NotesDto[] = [];
      projectNotes.push(projComment);
      this.projectCommentsList.push({
        projectId: projectSelectedId,
        notesInfo: projectNotes
      });
    }

    localStorage.setItem('projectCommentsList', JSON.stringify(this.projectCommentsList));
    this.projectNotesChanged.next(projComment);
  }

  getCommentsFromSelectedProject(): NotesDto[] {
    const selectedProject = this.projectService.getSelectedProject();
    const foundSelectedProject = this.projectCommentsList.find(p => p.projectId === selectedProject.id);
    if (foundSelectedProject) {
      return foundSelectedProject.notesInfo;
    }

    return [] as NotesDto[];
  }
}
