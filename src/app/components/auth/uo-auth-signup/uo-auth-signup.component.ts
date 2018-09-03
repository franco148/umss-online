import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { AuthService } from '../auth.service';
import { UserRole } from '../user-role.enum';
import { Role } from '../role.model';

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

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService,
              private router: Router) { }

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
    const roles: Role[] = [];
    this.userRolesFormControl.value.forEach(element => {
      roles.push({ authority: element });
    });

    this.authService.registerUser({
      name: form.value.name,
      lastName: form.value.lastName,
      account: form.value.account,
      password: form.value.password,
      nickName: form.value.nickName,
      birthdate: form.value.birthdate,
      userRoles: roles
    });
  }

  ngOnDestroy() {
    this.authSigupErrorSubscription.unsubscribe();
  }
}
