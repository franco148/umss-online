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
  selectedProject: Number;

  constructor(private projectService: ProjectService) {
    this.projectService.findAll().subscribe(data => {
      this.uoProjects = data;
      console.log(this.uoProjects);
    });
    console.log('before: ' + this.selectedProject);
  }

  changeProject(selectedProjecId: Number) {
    this.selectedProject = selectedProjecId;
    console.log(`Selected Project ID: ${this.selectedProject}`);
  }
}
