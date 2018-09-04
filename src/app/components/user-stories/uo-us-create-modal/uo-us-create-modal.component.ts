import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { User } from '../../../data/model/user.model';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-uo-us-create-modal',
  templateUrl: './uo-us-create-modal.component.html',
  styleUrls: ['./uo-us-create-modal.component.css']
})
export class UoUsCreateModalComponent implements OnInit {

  minDate: Date;
  assignedToList: User[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any, private userService: UserService,
                      public dialogRef: MatDialogRef<UoUsCreateModalComponent>) { }

  ngOnInit() {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    console.log('Passed Data: ', this.passedData);

    this.userService.findAll().subscribe(usersList => {
      this.assignedToList = usersList;
    });
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
  // {
  //   "assignedToId": 0,
  //   "createdById": 0,
  //   "description": "string",
  //   "estimatedTime": 0,
  //   "name": "string",
  //   "priority": "LOW",
  //   "startedAt": "dd-MM-yyyy HH:mm:ss"
  // }

  onCancel() {
    this.dialogRef.close();
  }
}
