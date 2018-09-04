import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UoAuthLoginComponent } from './components/auth/uo-auth-login/uo-auth-login.component';
import { UoAuthSignupComponent } from './components/auth/uo-auth-signup/uo-auth-signup.component';
import { UoProjectWelcomeComponent } from './components/projects/uo-project-welcome/uo-project-welcome.component';
import { UoProjectBacklogInfoComponent } from './components/projects/uo-project-backlog-info/uo-project-backlog-info.component';
import { AuthGuard } from './components/auth/auth.guard';

const routes: Routes = [
    { path: '', component: UoProjectWelcomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: UoAuthLoginComponent },
    { path: 'signup', component: UoAuthSignupComponent },
    { path: 'edit-profile/:id', component: UoAuthSignupComponent, canActivate: [AuthGuard] },
    { path: 'project/:id', component: UoProjectBacklogInfoComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }
