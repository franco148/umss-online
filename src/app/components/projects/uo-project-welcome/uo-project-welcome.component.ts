import { Component, OnInit } from '@angular/core';
import { Project } from '../../../data/model/project.model';

@Component({
  selector: 'app-uo-project-welcome',
  templateUrl: './uo-project-welcome.component.html',
  styleUrls: ['./uo-project-welcome.component.css']
})
export class UoProjectWelcomeComponent implements OnInit {

  projectsList: Project[] = [];
  projectName = 'Umss Online';

  constructor() { }

  ngOnInit() {
    const p0 = new Project();
    const p1 = new Project();
    const p2 = new Project();

    // this.projectsList.push(p0);
    // this.projectsList.push(p1);
    // this.projectsList.push(p2);
  }

}
