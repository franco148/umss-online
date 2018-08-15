import { Component } from '@angular/core';
import { ProjectService } from './service/project.service';
import { Project } from './data/model/project.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  uoProjects: Project[] = [];
  selectedProjectId: Number;
  selectedProject: Project;

  constructor(private projectService: ProjectService) {
    this.projectService.findAll().subscribe(data => {
      this.uoProjects = data;
      console.log(this.uoProjects);
    });
    console.log('before: ' + this.selectedProjectId);
  }

  changeProject(selectedProjecId: Number) {
    this.selectedProjectId = selectedProjecId;

    this.selectedProject = this.uoProjects.find(e => e.id === selectedProjecId);
    console.log(this.selectedProject);
  }
}
