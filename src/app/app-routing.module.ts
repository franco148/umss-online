import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UoAuthLoginComponent } from './components/auth/uo-auth-login/uo-auth-login.component';
import { UoAuthSignupComponent } from './components/auth/uo-auth-signup/uo-auth-signup.component';
import { UoProjectWelcomeComponent } from './components/projects/uo-project-welcome/uo-project-welcome.component';
import { UoProjectBacklogInfoComponent } from './components/projects/uo-project-backlog-info/uo-project-backlog-info.component';
import { AuthGuard } from './components/auth/auth.guard';
import { UoSprintInfoComponent } from './components/sprints/uo-sprint-info/uo-sprint-info.component';
import { UoDocInfoComponent } from './components/documents/uo-doc-info/uo-doc-info.component';
import { UoDocVersionsComponent } from './components/documents/uo-doc-versions/uo-doc-versions.component';
import { UoActiveSprintComponent } from './components/sprints/uo-active-sprint/uo-active-sprint.component';
import { SharingPanelComponent } from './components/members/sharing-panel/sharing-panel.component';

const routes: Routes = [
    { path: '', component: UoProjectWelcomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: UoAuthLoginComponent },
    { path: 'signup', component: UoAuthSignupComponent },
    { path: 'edit-profile/:id', component: UoAuthSignupComponent, canActivate: [AuthGuard] },
    { path: 'project/:id', component: UoProjectBacklogInfoComponent, canActivate: [AuthGuard] },
    { path: 'sprint', component: UoSprintInfoComponent, canActivate: [AuthGuard] },
    { path: 'project/:id/active-sprint', component: UoActiveSprintComponent, canActivate: [AuthGuard] },
    { path: 'project/:id/document', component: UoDocInfoComponent, canActivate: [AuthGuard] },
    { path: 'project-document/:id/versions', component: UoDocVersionsComponent, canActivate: [AuthGuard] },
    { path: 'members', component: SharingPanelComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }
