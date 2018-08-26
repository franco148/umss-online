import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-uo-auth-signup',
  templateUrl: './uo-auth-signup.component.html',
  styleUrls: ['./uo-auth-signup.component.css']
})
export class UoAuthSignupComponent implements OnInit {

  maxDate;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    // console.log(f);
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }
}
