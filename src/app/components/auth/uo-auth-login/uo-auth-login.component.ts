import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-uo-auth-login',
  templateUrl: './uo-auth-login.component.html',
  styleUrls: ['./uo-auth-login.component.css']
})
export class UoAuthLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', {validators: [Validators.required, Validators.min(6)]})
    });
  }

  onSubmit() {
    // console.log(this.loginForm);
    this.authService.login({
      account: this.loginForm.value.email,
      password: this.loginForm.value.password
    }).subscribe(res => {
      console.log('LOGIN:', res);
    });
  }
}
