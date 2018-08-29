import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { ProjectDto } from '../../../data/dto/project-dto';

@Component({
  selector: 'app-uo-project-create-modal',
  templateUrl: './uo-project-create-modal.component.html',
  styleUrls: ['./uo-project-create-modal.component.css']
})
export class UoProjectCreateModalComponent implements OnInit {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  minDate;
  newProject: ProjectDto;

  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) { }

  ngOnInit() {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() + 1);
  }

  onSubmit(form: NgForm) {
    // this.newProject = new ProjectDto();
  }

}
// {
//   "backlogDescription": "string",
//   "completedDateEstimation": "dd-MM-yyyy",
//   "createdById": 0,
//   "name": "Google Maps REST Api"
// }

export interface Food {
  value: string;
  viewValue: string;
}
