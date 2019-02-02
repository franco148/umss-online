import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';

import { ProjectService } from '../../../service/project.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-uo-project-create-modal',
  templateUrl: './uo-project-create-modal.component.html',
  styleUrls: ['./uo-project-create-modal.component.css']
})
export class UoProjectCreateModalComponent implements OnInit {

  minDate;

  constructor(public dialogRef: MatDialogRef<UoProjectCreateModalComponent>,
              private authService: AuthService,
              private projectService: ProjectService) { }

  ngOnInit() {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() + 1);
  }

  onSubmit(form: NgForm) {
    this.projectService.save({
      name: form.value.name,
      completedDateEstimation: form.value.completedOn,
      backlogDescription: form.value.backlogDescription,
      createdById: this.authService.getUser().id
    }).subscribe(savedProject => {
      this.projectService.projectAddedChange.next(savedProject);
      this.dialogRef.close();
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

}
