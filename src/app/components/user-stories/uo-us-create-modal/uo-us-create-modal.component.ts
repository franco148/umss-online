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

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any, private userService: UserService,
                      public dialogRef: MatDialogRef<UoUsCreateModalComponent>) { }

  ngOnInit() {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    console.log('Passed Data: ', this.passedData);

    this.userService.findAll().subscribe(usersList => {
      console.log(usersList);
      this.assignedToList = usersList;
    });
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

  onCancel() {
    this.dialogRef.close();
  }
}

export interface Food {
  value: string;
  viewValue: string;
}
