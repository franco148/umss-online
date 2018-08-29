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
  }

  onSubmit(form: NgForm) {
    this.projectService.save({
      name: form.value.name,
      completedDateEstimation: form.value.completedOn,
      backlogDescription: form.value.backlogDescription,
      createdById: 1
    }).subscribe(savedProject => {
      this.projectService.projectAddedChange.next(savedProject);
      this.dialogRef.close();
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

}
