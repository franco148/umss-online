import { Component } from '@angular/core';
import { ProjectService } from './service/project.service';
import { Project } from './data/model/project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  uoProjects: Project[] = [];
  selectedProjectId: Number;
  selectedProject: Project;
  // image = this.sanitization.bypassSecurityTrustStyle(`url(${element.image})`);

  constructor(private router: Router, private projectService: ProjectService) {
  }

  changeProject(selectedProjecId: any) {
  }
}
