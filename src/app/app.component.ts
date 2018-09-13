import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { ProjectService } from './service/project.service';
import { AuthService } from './components/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnInit() {
  }

  onLogout() {
  }

  ngOnDestroy() {
  }

}
