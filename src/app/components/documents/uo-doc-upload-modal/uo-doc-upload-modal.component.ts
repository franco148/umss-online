import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-uo-doc-upload-modal',
  templateUrl: './uo-doc-upload-modal.component.html',
  styleUrls: ['./uo-doc-upload-modal.component.css']
})
export class UoDocUploadModalComponent implements OnInit {

  minDate;

  constructor(public dialogRef: MatDialogRef<UoDocUploadModalComponent>) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    // this.projectService.save({
    //   name: form.value.name,
    //   completedDateEstimation: form.value.completedOn,
    //   backlogDescription: form.value.backlogDescription,
    //   createdById: 1
    // }).subscribe(savedProject => {
    //   this.projectService.projectAddedChange.next(savedProject);
    //   this.dialogRef.close();
    // });
  }

  onCancel() {
    // this.dialogRef.close();
  }
}
