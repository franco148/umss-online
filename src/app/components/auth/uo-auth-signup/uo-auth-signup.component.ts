import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm, FormControl } from '@angular/forms';
import { UserRole } from '../user-role.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uo-auth-signup',
  templateUrl: './uo-auth-signup.component.html',
  styleUrls: ['./uo-auth-signup.component.css']
})
export class UoAuthSignupComponent implements OnInit {

  maxDate;
  userRoles;
  isEditMode: boolean;

  userRolesFormControl = new FormControl();

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
    });
  }
}
