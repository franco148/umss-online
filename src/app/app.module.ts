import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ProjectBacklogComponent } from './components/main/project-backlog/project-backlog.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectBacklogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
