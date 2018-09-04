import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-uo-us-create-modal',
  templateUrl: './uo-us-create-modal.component.html',
  styleUrls: ['./uo-us-create-modal.component.css']
})
export class UoUsCreateModalComponent implements OnInit {

  minDate: Date;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any, private authService: AuthService,
                      public dialogRef: MatDialogRef<UoUsCreateModalComponent>) { }

  ngOnInit() {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    console.log('Passed Data: ', this.passedData);
  }

  onSubmit(form: NgForm) {}

  onCancel() {
    this.dialogRef.close();
  }
}

export interface Food {
  value: string;
  viewValue: string;
}
