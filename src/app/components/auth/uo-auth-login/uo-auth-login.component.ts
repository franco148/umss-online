import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-uo-auth-login',
  templateUrl: './uo-auth-login.component.html',
  styleUrls: ['./uo-auth-login.component.css']
})
export class UoAuthLoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;

  authLogginErrorSubscription: Subscription;

  authErrorMessage: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', {validators: [Validators.required, Validators.min(6)]})
    });

    this.authLogginErrorSubscription = this.authService.authErrorChanged.subscribe(message => {
      this.authErrorMessage = message;
    });
  }

  onSubmit() {
    this.authService.login({
      account: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }

  ngOnDestroy() {
    this.authLogginErrorSubscription.unsubscribe();
  }
}
