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

  constructor(private router: Router, private projectService: ProjectService) {
    // this.projectService.findAll().subscribe(data => {
    //   this.uoProjects = data;
    //   // console.log(this.uoProjects);
    // });
    // console.log('before: ' + this.selectedProjectId);

    const procs = this.projectService.findAll();
    this.uoProjects = procs;
  }

  // changeProject(selectedProjecId: Number) {
  //   this.selectedProjectId = selectedProjecId;

  //   this.selectedProject = this.uoProjects.find(e => e.id === selectedProjecId);
  //   // console.log(this.selectedProject);

  //   this.router.navigate(['/project-backlog', selectedProjecId]);
  // }

  changeProject(selectedProjecId: any) {
    this.selectedProjectId = selectedProjecId;

    this.selectedProject = this.uoProjects.find(e => e.id === selectedProjecId);
    console.log('selected project: ', this.selectedProject);

    this.router.navigate(['/project-backlog', selectedProjecId]);
  }
}
