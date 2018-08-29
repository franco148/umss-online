import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';

import { ProjectDto } from '../../../data/dto/project-dto';
import { UserService } from '../../../service/user.service';
import { ProjectService } from '../../../service/project.service';
import { User } from '../../auth/user.model';
import { Project } from '../../../data/model/project.model';

@Component({
  selector: 'app-uo-project-create-modal',
  templateUrl: './uo-project-create-modal.component.html',
  styleUrls: ['./uo-project-create-modal.component.css']
})
export class UoProjectCreateModalComponent implements OnInit {

  minDate;
  newProject: ProjectDto;
  assignedToList: User[] = [];
  savedProject: Project;

  projectName: string;
  projectCompletion: Date;
  projectDescription: string;
  projectOwner: number;

  constructor(public dialogRef: MatDialogRef<UoProjectCreateModalComponent>,
              private userService: UserService,
              private projectService: ProjectService) { }

  ngOnInit() {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() + 1);

    // this.userService.findAll().subscribe(usersResult => {
    //   this.assignedToList = usersResult.slice();
    //   console.log(this.assignedToList);
    // });
    this.savedProject = new Project();
    this.savedProject.name = 'savedProject';
  }

  onSubmit(form: NgForm) {
    console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
    this.projectService.save({
      name: form.value.name,
      completedDateEstimation: form.value.completedOn,
      backlogDescription: form.value.backlogDescription,
      createdById: 1
    }).subscribe(savedProject => {
      this.savedProject = savedProject;
      console.log('==============', this.savedProject);
      this.projectService.projectAddedChange.next(this.savedProject);
      this.dialogRef.close();
    });
    // this.newProject = {
    //   name: '',
    //   backlogDescription: '',
    //   completedDateEstimation: new Date(),
    //   createdById: 1
    // };
    // this.newProject = {
    //   name: this.projectName,
    //   backlogDescription: this.projectDescription,
    //   completedDateEstimation: this.projectCompletion,
    //   createdById: 1
    // };
    // this.projectService.projectAddedChange.next(this.newProject);
    // console.log('Submitted', this.savedProject, this.newProject);
  }

  onCancel() {
    // this.dialogRef.close();
  }

}
