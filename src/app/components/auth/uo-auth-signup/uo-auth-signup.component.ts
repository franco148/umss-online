import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { AuthService } from '../auth.service';
import { UserRole } from '../user-role.enum';

@Component({
  selector: 'app-uo-auth-signup',
  templateUrl: './uo-auth-signup.component.html',
  styleUrls: ['./uo-auth-signup.component.css']
})
export class UoAuthSignupComponent implements OnInit, OnDestroy {

  maxDate;
  userRoles;
  isEditMode: boolean;
  authErrorMessage: string;

  userRolesFormControl = new FormControl();

  authSigupErrorSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);

    this.userRoles = UserRole;

    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
      }
    });

    this.authSigupErrorSubscription = this.authService.authErrorChanged.subscribe(errMessage => {
      this.authErrorMessage = errMessage;
    });
  }

  onSubmit(form: NgForm) {
    // console.log(form);
    // console.log(this.userRolesFormControl);
    this.authService.registerUser({
      name: form.value.name,
      lastName: form.value.lastName,
      account: form.value.account,
      password: form.value.password,
      nickName: form.value.nickName,
      birthdate: form.value.birthdate,
      roles: this.userRolesFormControl.value
    }).subscribe(savedusr => {
      console.log('SAVED USR', savedusr);
    });
  }

  ngOnDestroy() {
    this.authSigupErrorSubscription.unsubscribe();
  }
}
