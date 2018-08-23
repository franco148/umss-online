import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ProjectBacklogComponent } from './components/project-backlog/project-backlog.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { UoDocsToolbarComponent } from './components/documents/uo-docs-toolbar/uo-docs-toolbar.component';
import { UoDocsHeaderComponent } from './components/documents/uo-docs-header/uo-docs-header.component';
import { UoInfoCardComponent } from './components/shared/uo-info-card/uo-info-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectBacklogComponent,
    LoginComponent,
    SignupComponent,
    UoDocsToolbarComponent,
    UoDocsHeaderComponent,
    UoInfoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
