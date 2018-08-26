import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ProjectBacklogComponent } from './components/project-backlog/project-backlog.component';
import { UoAuthLoginComponent } from './components/auth/uo-auth-login/uo-auth-login.component';
import { UoAuthSignupComponent } from './components/auth/uo-auth-signup/uo-auth-signup.component';
import { UoDocsToolbarComponent } from './components/documents/uo-docs-toolbar/uo-docs-toolbar.component';
import { UoDocsHeaderComponent } from './components/documents/uo-docs-header/uo-docs-header.component';
import { UoInfoCardComponent } from './components/shared/uo-info-card/uo-info-card.component';
import { UoDocsNotesComponent } from './components/documents/uo-docs-notes/uo-docs-notes.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectBacklogComponent,
    UoAuthLoginComponent,
    UoAuthSignupComponent,
    UoDocsToolbarComponent,
    UoDocsHeaderComponent,
    UoInfoCardComponent,
    UoDocsNotesComponent
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
