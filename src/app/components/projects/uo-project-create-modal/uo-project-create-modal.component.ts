import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { ProjectDto } from '../../../data/dto/project-dto';
import { UserService } from '../../../service/user.service';
import { ProjectService } from '../../../service/project.service';
import { User } from '../../auth/user.model';

@Component({
  selector: 'app-uo-project-create-modal',
  templateUrl: './uo-project-create-modal.component.html',
  styleUrls: ['./uo-project-create-modal.component.css']
})
export class UoProjectCreateModalComponent implements OnInit {

  minDate;
  newProject: ProjectDto;
  assignedToList: User[] = [];

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
    console.log(form);
  }

}
