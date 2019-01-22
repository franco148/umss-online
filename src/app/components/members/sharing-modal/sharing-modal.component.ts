import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-sharing-modal',
  templateUrl: './sharing-modal.component.html',
  styleUrls: ['./sharing-modal.component.css']
})
export class SharingModalComponent implements OnInit {

  constructor(private authService: AuthService, public dialogRef: MatDialogRef<SharingModalComponent>) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {}

  onCancel() {
    this.dialogRef.close();
  }
}
