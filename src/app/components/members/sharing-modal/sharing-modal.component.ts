import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../../data/model/user.model';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-sharing-modal',
  templateUrl: './sharing-modal.component.html',
  styleUrls: ['./sharing-modal.component.css']
})
export class SharingModalComponent implements OnInit {

  registeredUsers: User[] = [];

  constructor(private commonService: CommonService,
              public dialogRef: MatDialogRef<SharingModalComponent>) { }

  async ngOnInit() {
    this.registeredUsers = await this.commonService.getUsersToShareWith();
  }

  onSubmit(form: NgForm) {
    this.commonService.shareProjectWith(form.value.sharedWith);
    this.dialogRef.close();
  }

  onCancel() {
    this.dialogRef.close();
  }
}
