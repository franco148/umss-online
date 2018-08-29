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
import { UoProjectHeaderComponent } from './components/projects/uo-project-header/uo-project-header.component';
import { UoProjectProgressComponent } from './components/projects/uo-project-progress/uo-project-progress.component';
import { UoProgressItemComponent } from './components/projects/uo-project-progress/uo-progress-item/uo-progress-item.component';
import { UoProjectCreateModalComponent } from './components/projects/uo-project-create-modal/uo-project-create-modal.component';
import { UoProjectWelcomeComponent } from './components/projects/uo-project-welcome/uo-project-welcome.component';
import { UoProjectBacklogInfoComponent } from './components/projects/uo-project-backlog-info/uo-project-backlog-info.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectBacklogComponent,
    UoAuthLoginComponent,
    UoAuthSignupComponent,
    UoDocsToolbarComponent,
    UoDocsHeaderComponent,
    UoInfoCardComponent,
    UoDocsNotesComponent,
    UoProjectHeaderComponent,
    UoProjectProgressComponent,
    UoProgressItemComponent,
    UoProjectCreateModalComponent,
    UoProjectWelcomeComponent,
    UoProjectBacklogInfoComponent
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
  bootstrap: [AppComponent],
  entryComponents: [UoProjectCreateModalComponent]
})
export class AppModule { }
