import { Injectable } from '@angular/core';
import { GATEWAY_SERVER_URL } from '../constants/app.constant';
import { HttpClient } from '@angular/common/http';
import { Project } from '../data/model/project.model';
import { Subject } from 'rxjs';
import { User } from '../data/model/user.model';
import { Task } from '../data/model/task.model';
import { Sprint } from '../data/model/sprint.model';
import { UserStory } from '../data/model/user-story.model';
import { Backlog } from '../data/model/backlog.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  serverUrl = `${GATEWAY_SERVER_URL}/proj-mgt/projects`;

  projectsChange = new Subject<Project[]>();
  message = new Subject<string>();

  // Dummy values for testing purposes.
  dummyProjectsList: Project[] = [];

  constructor(private http: HttpClient) {
    this.loadDummyData();
  }

  findAll() {
    // return this.http.get<Project[]>(this.serverUrl);

    return this.dummyProjectsList;
  }

  findById(projectId: number) {
    // return this.http.get<Project>(`${this.serverUrl}/${projectId}`);
    let foundProject: Project;
    foundProject = this.dummyProjectsList.find(p => p.id == projectId);
    return foundProject;
  }

  private loadDummyData() {
    // Creaing User
    const dummyUser = new User();
    dummyUser.id = 1;
    dummyUser.name = 'Franco';
    dummyUser.lastName = 'Arratia';
    dummyUser.nickName = 'fral';

    // Creating tasks
    const dummyTask = new Task();
    dummyTask.id = 1;
    dummyTask.name = 'Implement jpa entities for authentication and authorization features';
    dummyTask.priority = 'HIGH';
    dummyTask.assignedTo = dummyUser;
    dummyTask.estimatedTime = 6;

    // Creating Sprints
    const dummySrint = new Sprint();
    dummySrint.id = 1;
    dummySrint.name = 'SP101';
    dummySrint.startedOn = new Date();
    dummySrint.completedOn = new Date();

    // Creating User Stories
    const dummyUserStories: UserStory[] = [];
    for (let index = 0; index < 6; index++) {
      const userStory01 = new UserStory();
      userStory01.id = index;
      userStory01.name = 'Implement Authentication Module';
      userStory01.priority = 'HIGH';
      userStory01.assignedTo = dummyUser;
      userStory01.estimatedTime = 40;
      userStory01.tasks = [];
      userStory01.tasks.push(dummyTask);

      dummyUserStories.push(userStory01);
    }

    for (let index = 0; index < 3; index++) {

      // Creating backlog
      const backlog01 = new Backlog();
      backlog01.id = index;
      backlog01.description = `Backlog v${index}`;
      backlog01.ammountOfUserStories = 6;
      backlog01.userStories = dummyUserStories;

      // Creating projects
      const proj01: Project = new Project();
      proj01.id = index;
      proj01.name = `Web Project v${index}`;
      proj01.completedDateEstimation = new Date();
      proj01.backlog = backlog01;

      this.dummyProjectsList.push(proj01);
    }
  }
}
