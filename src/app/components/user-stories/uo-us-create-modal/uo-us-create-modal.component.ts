import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { User } from '../../../data/model/user.model';
import { UserService } from '../../../service/user.service';
import { UserStoryService } from '../../../service/user-story.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-uo-us-create-modal',
  templateUrl: './uo-us-create-modal.component.html',
  styleUrls: ['./uo-us-create-modal.component.css']
})
export class UoUsCreateModalComponent implements OnInit {

  minDate: Date;
  assignedToList: User[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any, private userService: UserService,
                      public dialogRef: MatDialogRef<UoUsCreateModalComponent>,
                      private userStoryService: UserStoryService, private authService: AuthService) { }

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
    console.log('CREATED BY......', this.authService.getUser());
    // this.userStoryService.save({
    //   name: form.value.name,
    //   description: form.value.description,
    //   priority: form.value.priority,
    //   estimatedTime: form.value.estimatedTime,
    //   startedAt: form.value.startedAt,
    //   assignedToId: form.value.assignedToId,
    //   createdById: this.authService.getUser().id
    // });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
