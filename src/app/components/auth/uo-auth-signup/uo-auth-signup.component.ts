import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm, FormControl } from '@angular/forms';
import { UserRole } from '../user-role.enum';

@Component({
  selector: 'app-uo-auth-signup',
  templateUrl: './uo-auth-signup.component.html',
  styleUrls: ['./uo-auth-signup.component.css']
})
export class UoAuthSignupComponent implements OnInit {

  maxDate;
  userRoles;

  userRolesFormControl = new FormControl();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);

    this.userRoles = UserRole;
  }

  onSubmit(form: NgForm) {
    // console.log(f);
    this.authService.registerUser({
      account: form.value.email,
      password: form.value.password
    });
  }
}
