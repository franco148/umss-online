import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { MatDialogRef } from '@angular/material';
import { User } from '../../../data/model/user.model';

@Component({
  selector: 'app-sharing-modal',
  templateUrl: './sharing-modal.component.html',
  styleUrls: ['./sharing-modal.component.css']
})
export class SharingModalComponent implements OnInit {

  registeredUsers: User[];

  constructor(private authService: AuthService, public dialogRef: MatDialogRef<SharingModalComponent>) { }

  ngOnInit() {
    this.authService.findAll().subscribe(users => {
      console.log(users);
    });
  }

  onSubmit(form: NgForm) {}

  onCancel() {
    this.dialogRef.close();
  }
}
