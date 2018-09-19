import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
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
import { UoUsCreateModalComponent } from './components/user-stories/uo-us-create-modal/uo-us-create-modal.component';
import { RoleKeysPipe } from './pipe/role-keys.pipe';
import { AppServerErrorInterceptor } from './app-server-error.interceptor';
import { UoSprintInfoComponent } from './components/sprints/uo-sprint-info/uo-sprint-info.component';
import { UoHeaderComponent } from './components/shared/uo-header/uo-header.component';
import { UoSidenavComponent } from './components/shared/uo-sidenav/uo-sidenav.component';
import { UoDocInfoComponent } from './components/documents/uo-doc-info/uo-doc-info.component';


@NgModule({
  declarations: [
    AppComponent,
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
    UoProjectBacklogInfoComponent,
    UoUsCreateModalComponent,
    RoleKeysPipe,
    UoSprintInfoComponent,
    UoHeaderComponent,
    UoSidenavComponent,
    UoDocInfoComponent
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppServerErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [UoProjectCreateModalComponent, UoUsCreateModalComponent]
})
export class AppModule { }
